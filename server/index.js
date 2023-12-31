const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");
const cors = require("cors");

app.use(cors());
mongoDB();

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://mern-go-foood.vercel.app"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

app.use("/api/", require("./Routes/CreateUser"));
app.use("/api/", require("./Routes/DisplayData"));

app.get("/", (req, res) => {
  res.send("hello world from port 5000");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
