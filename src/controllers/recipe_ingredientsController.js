const { validateRequiredFields, validateFound } = require("../utils/validationHelper.js");
const riServices = require("../services/recipe_ingredients/recipe_ingredientsService.js");
const { sendResponse } = require("../utils/controllerHelper.js");

const requiredFields = ["quantity", "unit"];

//ROTAS mais específicas
//SEARCH recipe by name
async function searchRecipeController(req, res) {
    validateRequiredFields(req.query, ["name"]);
    const name = `%${req.query.name}%`;
    const response = await riServices.searchRecipeByName(name);
    sendResponse(res, 200, response);
}

//SEARCH ingredient by name
async function searchIngredientController(req, res) {
    validateRequiredFields(req.query, ["name"]);
    const name = `%${req.query.name}%`;
    const response = await riServices.searchRecipeIgredientByName(name);
    sendResponse(res, 200, response);
}

//CRUD Básico
//POST
async function insertOneController(req, res) {
    validateRequiredFields(req.body, requiredFields);
    const response = await riServices.addIngredientToRecipe(req.body);
    sendResponse(res, 201, response);
}

//GET ingredients by recipe id
async function getIngredientsByRecipeController(req, res) {
    const response = await riServices.getIngredientsByRecipeId(req.params.id);
    console.log("Response:", response);
    validateFound(response, "Recipe");
    sendResponse(res, 200, response);
}

//UPDATE one recipe ingredient
async function updateRecipeIngredientController(req, res) {
    const { recipeId, ingredientId } = req.params;
    validateRequiredFields(req.body, requiredFields);
    const response = await riServices.updateOneRecipeIngredient(req.body, recipeId, ingredientId);
    validateFound(response, "Recipe/Ingredient");
    sendResponse(res, 200, response);
}

//DELETE one recipe ingredient
async function deleteRecipeIngredientController(req, res) {
    const { recipeId, ingredientId } = req.params;
    const response = await riServices.deleteIngredientFromRecipe(recipeId, ingredientId);
    validateFound(response, "Recipe/Ingredient");
    sendResponse(res, 204, response);
}

module.exports = {
    insertOneController,
    getIngredientsByRecipeController,
    updateRecipeIngredientController,
    deleteRecipeIngredientController,
    searchRecipeController,
    searchIngredientController,
};
