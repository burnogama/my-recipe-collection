const express = require("express");
const { tryCatch } = require("../middleware/asyncHandler.js");
const controller = require("../controllers/recipe_ingredientsController.js");

const route = express.Router();

//POST
route.post("/recipe_ingredients", tryCatch(controller.insertOneController));

//GET/:id
route.get("/recipe_ingredients/:id", tryCatch(controller.getIngredientsByRecipeController));

//PATCH/:id
route.patch("/recipe_ingredients/:recipeId/:ingredientId", tryCatch(controller.updateOneRecipeIngredientController));

//DELETE/:id
route.delete("/recipe_ingredients/:recipeId/:ingredientId", tryCatch(controller.deleteOneRecipeIngredientController));

module.exports = route;
