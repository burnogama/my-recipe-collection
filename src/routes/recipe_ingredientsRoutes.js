const express = require("express");
const { tryCatch } = require("../middleware/asyncHandler.js");
const controller = require("../controllers/recipe_ingredientsController.js");

const route = express.Router();

//Rotas mais específicas
//SEARCH recipes by name
route.get("/recipe-ingredients/search-by-recipe", tryCatch(controller.searchRecipeController));

//SEARCH ingredients by name
route.get("/recipe-ingredients/search-by-ingredient", tryCatch(controller.searchIngredientController));

//CRUD Básico
//POST
route.post("/recipe-ingredients", tryCatch(controller.insertOneController));

//GET/:id
route.get("/recipe-ingredients/:id", tryCatch(controller.getIngredientsByRecipeController));

//PATCH/:id
route.patch("/recipe-ingredients/:recipeId/:ingredientId", tryCatch(controller.updateRecipeIngredientController));

//DELETE/:id
route.delete("/recipe-ingredients/:recipeId/:ingredientId", tryCatch(controller.deleteRecipeIngredientController));

module.exports = route;
