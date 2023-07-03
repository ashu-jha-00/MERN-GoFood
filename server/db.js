const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://jhaashu09868:HUQbe1BQri0fhYCW@cluster0.6syhtb2.mongodb.net/gofood?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to MongoDB");

    const fetchedData = await mongoose.connection.db
      .collection("food_items")
      .find({})
      .toArray();
    const categoryData = await mongoose.connection.db
      .collection("foodCategory")
      .find({})
      .toArray();

    global.food_items = fetchedData;
    global.foodCategory = categoryData;

    console.log("Fetched data:", fetchedData);
    console.log("Category data:", categoryData);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;

// const mongoDB = async () => {
//   await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, reslut) => {
//     if (err) {
//       console.log("---", err);
//     } else {
//       console.log("connected");
//       const fetched_data = mongoose.connection.db.collection("food_items");
//       fetched_data.find({}).toArray(function (err, data) {
//         const foodCategory = mongoose.connection.db.collection("foodCategory");
//         foodCategory.find({}).toArray(function (err, catData) {
//           if (err) console.log(err);
//           else {
//             global.food_items = data; // data is the data of food items
//             global.foodCategory = catData; // catData is category data
//           }
//         });

//         // if(err)console.log(err);
//         // else {
//         //     global.food_items = data;
//         //     // console.log(global.food_items);
//         // }
//       });
//     }
//   });
// };

// // const mongoDB = () =>{
// //     mongoose.connect(mongoURI, ()=>{
// //         console.log("Connected");
// //     });
// // }

// module.exports = mongoDB;

// const mongoDB = async () => {
//   try {
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to the database");

//     const connection = mongoose.connection;
//     connection.on("error", (error) => {
//       console.error("MongoDB connection error:", error);
//     });

//     connection.once("open", async () => {
//       try {
//         const fetchedData = connection.collection("food_items");
//         const data = await fetchedData.find({}).toArray();
//         console.log("Fetched data:", data);
//         global.food_items = data;
//         console.log("Global food_items ===================================================================================>>>>>>>:", global.food_items);
//         connection.close();
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         connection.close();
//       }
//     });
//   } catch (error) {
//     console.error("Error connecting to the database:", error);
//   }
// };

// module.exports = mongoDB;
