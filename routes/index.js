const express = require("express");
const router = express.Router();

// Import individual route files
const spoonacularRoutes = require("./spoonacularRoutes");
const recipeRoutes = require("./recipeRoutes");
const favoritesRoutes = require("./favoritesRoutes");

// Mount routes
router.use("/api/spoonacular", spoonacularRoutes);
router.use("/api/recipes", recipeRoutes);
router.use("/favorites", favoritesRoutes);

module.exports = router;
