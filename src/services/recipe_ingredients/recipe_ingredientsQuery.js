const queries = {
    insert: `INSERT INTO recipe_ingredients 
                (recipe_id, ingredient_id, quantity, unit) 
            VALUES ($1, $2, $3, $4) 
            RETURNING *
            `,
    getOne: `SELECT 
                ri.recipe_id,
                recipes.name AS recipe_name, 
                ri.ingredient_id,
                ingredients.name AS ingredient_name, 
                ri.quantity, 
                ri.unit 
            FROM recipe_ingredients AS ri 
            JOIN recipes ON ri.recipe_id = recipes.id
            JOIN ingredients ON ri.ingredient_id = ingredients.id
            WHERE ri.recipe_id = $1
            `,
    update: `UPDATE 
                recipe_ingredients AS ri
            SET quantity = $1, unit = $2
            WHERE ri.recipe_id = $3 AND ingredient_id = $4
            RETURNING *
                `,
    delete: `DELETE FROM
                recipe_ingredients AS ri
            WHERE ri.recipe_id = $1 
            AND ri.ingredient_id = $2
            RETURNING *
                `,
    searchByRecipeName: `SELECT
                            ri.recipe_id,
                            recipes.name AS recipe_name,
                            ri.ingredient_id,
                            ingredients.name AS ingredient_name,
                            ri.quantity,
                            ri.unit
                        FROM recipe_ingredients AS ri
                        JOIN recipes ON ri.recipe_id = recipes.id
                        JOIN ingredients ON ri.ingredient_id = ingredients.id
                        WHERE recipes.name ILIKE $1
                            `,
    searchByIngredientName: `SELECT 
                                ri.recipe_id,
                                recipes.name AS recipe_name,
                                ri.ingredient_id,
                                ingredients.name AS ingredient_name,
                                ri.quantity,
                                ri.unit
                            FROM recipe_ingredients AS ri
                            JOIN recipes ON ri.recipe_id = recipes.id
                            JOIN ingredients ON ri.ingredient_id = ingredients.id
                            WHERE ingredients.name ILIKE $1
                            `,
};

module.exports = queries;
