const express = require("express");
const router = express.Router();
const mongoDB = require("../db");

router.post("/foodData", async (req, res) => {
  try {
    await mongoDB(); // Wait for mongoDB() function to complete
    // console.log(global.food_items);
    res.send([global.food_items , global.foodCategory ]|| ["error"]); // Return global.food_items or an empty array if it's null
  } catch (err) {
    // console.log(err.message);
    res.send("Server Error");
  }
});

module.exports = router;    
