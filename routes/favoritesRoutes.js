const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");

// Route to fetch and render saved recipes
router.get("/", async (req, res) => {
  console.log("Favorites route triggered");
  try {
    const recipes = await Recipe.find().lean(); // Fetch all saved recipes as plain objects
    res.render("favorites", { title: "Your Favorites", recipes });
  } catch (error) {
    console.error("Error fetching saved recipes:", error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
