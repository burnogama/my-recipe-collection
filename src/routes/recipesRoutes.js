const express = require("express");
const { tryCatch } = require("../middleware/asyncHandler.js");

const route = express.Router();

const controller = require("../controllers/recipesController.js");
//POST
route.post("/recipes", tryCatch(controller.createRecipeController));

//GET
route.get("/recipes", tryCatch(controller.getAllRecipesController));

//GET/:id
route.get("/recipes/:id", tryCatch(controller.getOneRecipeController));

//PATCH/:id
route.patch("/recipes/:id", tryCatch(controller.updateOneRecipeController));

//DELETE/:id
route.delete("/recipes/:id", tryCatch(controller.deleteOneRecipeController));

module.exports = route;
