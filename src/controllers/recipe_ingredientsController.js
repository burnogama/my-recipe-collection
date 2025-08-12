const { validateRequiredFields, validateFound } = require("../utils/validationHelper.js");
const riServices = require("../services/recipe_ingredients/recipe_ingredientsService.js");
const { sendResponse } = require("../utils/controllerHelper.js");

const requiredFields = ["quantity", "unit"];

//POST
async function insertOneController(req, res) {
    validateRequiredFields(req.body, requiredFields);
    const response = await riServices.addIngredientToRecipe(req.body);
    sendResponse(res, 201, response);
}

//GET
async function getIngredientsByRecipeController(req, res) {
    const response = await riServices.getIngredientsByRecipeId(req.params.id);
    console.log("Response:", response);
    validateFound(response, "Recipe");
    sendResponse(res, 200, response);
}

//UPDATE
async function updateOneRecipeIngredientController(req, res) {
    const { recipeId, ingredientId } = req.params;
    validateRequiredFields(req.body, requiredFields);
    const response = await riServices.updateOneRecipeIngredient(req.body, recipeId, ingredientId);
    validateFound(response, "Recipe/Ingredient");
    sendResponse(res, 200, response);
}

//DELETE
async function deleteOneRecipeIngredientController(req, res) {
    const { recipeId, ingredientId } = req.params;
    const response = await riServices.deleteIngredientFromRecipe(recipeId, ingredientId);
    validateFound(response, "Recipe/Ingredient");
    sendResponse(res, 204, response);
}

module.exports = {
    insertOneController,
    getIngredientsByRecipeController,
    updateOneRecipeIngredientController,
    deleteOneRecipeIngredientController,
};
