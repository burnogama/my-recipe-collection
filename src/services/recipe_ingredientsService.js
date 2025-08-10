const { pool } = require("../../db/config/initDB.js");
const { extractValues } = require("../utils/extractValues.js");

const QUERY = {
    insert: `INSERT INTO recipe_ingredients 
                (recipe_id, ingredient_id, quantity, unit) 
                VALUES ($1, $2, $3, $4) 
                RETURNING *`,
    getOne: `SELECT 
                recipes.name AS recipe_name, 
                ingredients.name AS ingredient_name, 
                ri.quantity, 
                ri.unit 
                FROM recipe_ingredients AS ri 
                JOIN recipes ON ri.recipe_id = recipes.id
                JOIN ingredients ON ri.ingredient_id = ingredients.id
                WHERE ri.recipe_id = $1`,
    update: `UPDATE recipe_ingredients AS ri
                SET quantity = $1, unit = $2
                WHERE ri.recipe_id = $3 AND ingredient_id = $4
                RETURNING *`,
    delete: `DELETE FROM recipe_ingredients AS ri
                WHERE ri.recipe_id = $1 AND ri.ingredient_id = $2
                RETURNING *`,
};

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
