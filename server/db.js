const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://jhaashu09868:HUQbe1BQri0fhYCW@cluster0.6syhtb2.mongodb.net/gofood?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");

    const connection = mongoose.connection;
    connection.on("error", (error) => {
      console.error("MongoDB connection error:", error);
    });

    connection.once("open", async () => {
      try {
        const fetchedData = connection.collection("food_items");
        const data = await fetchedData.find({}).toArray();
        console.log("Fetched data:", data);
        connection.close();
      } catch (error) {
        console.error("Error fetching data:", error);
        connection.close();
      }
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

module.exports = mongoDB;
