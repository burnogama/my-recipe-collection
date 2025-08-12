const { pool } = require("../../../db/config/initDB.js");
const { extractValues } = require("../../utils/extractValues.js");

const QUERY = require("./recipe_ingredientsQuery.js");

const createValues = ["recipe_id", "ingredient_id", "quantity", "unit"];
const updateValues = ["quantity", "unit"];

//POST
async function addIngredientToRecipe(body) {
    const values = extractValues(createValues, body);
    const res = await pool.query(QUERY.insert, values);
    return res.rows[0];
}

//GET :id
async function getIngredientsByRecipeId(id) {
    const res = await pool.query(QUERY.getOne, [id]);
    return res.rows;
}

//PATCH :id
async function updateOneRecipeIngredient(body, recipeId, ingredientId) {
    const values = [...extractValues(updateValues, body), recipeId, ingredientId];
    const res = await pool.query(QUERY.update, values);
    return res.rows[0];
}

//DELETE :id
async function deleteIngredientFromRecipe(recipeId, ingredientId) {
    const values = [recipeId, ingredientId];
    const res = await pool.query(QUERY.delete, values);
    return res.rows[0];
}

module.exports = {
    addIngredientToRecipe,
    getIngredientsByRecipeId,
    updateOneRecipeIngredient,
    deleteIngredientFromRecipe,
};
