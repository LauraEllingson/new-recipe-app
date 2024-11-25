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
  // Route to delete a recipe by ID
router.delete("/:id", async (req, res) => {
    const recipeId = req.params.id;
    try {
      // Find the recipe by ID and delete it
      await Recipe.findByIdAndDelete(recipeId);
      res.status(200).json({ message: "Recipe deleted successfully" });
    } catch (error) {
      console.error("Error deleting recipe:", error.message);
      res.status(500).json({ error: "Failed to delete recipe" });
    }
});

module.exports = router;
