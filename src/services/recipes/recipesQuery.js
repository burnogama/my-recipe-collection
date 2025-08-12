const queries = {
    insert: "INSERT INTO recipes (name, description, yield_amount, cost_price, instructions, notes) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    getAll: "SELECT * FROM recipes",
    getOne: "SELECT * FROM recipes WHERE id = $1",
    update: "UPDATE recipes SET name = $1, description = $2, yield_amount = $3, cost_price = $4, instructions = $5, notes = $6 WHERE id = $7 RETURNING *",
    delete: "DELETE FROM recipes WHERE id = $1 RETURNING *",
    searchbyName: "SELECT * FROM recipes WHERE name ILIKE $1", //ILIKE = case-insensitive, SEARCH FOR EVERYTHING THAT MATCHES THE PARAM.
};

module.exports = queries;
