const express = require("express");
const { tryCatch } = require("../middleware/asyncHandler.js");

const route = express.Router();

const controller = require("../controllers/ingredientsController.js");

//POST
route.post("/ingredients", tryCatch(controller.createIngredientController));

//GET
route.get("/ingredients", tryCatch(controller.getAllIngredientsController));

//GET/:id
route.get("/ingredients/:id", tryCatch(controller.getOneIngredientController));

//PATCH/:id
route.patch("/ingredients/:id", tryCatch(controller.updateOneIngredientController));

//DELETE/:id
route.delete("/ingredients/:id", tryCatch(controller.deleteOneIngredientController));

module.exports = route;
