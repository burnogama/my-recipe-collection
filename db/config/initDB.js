const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING,
});

async function initDB() {
    const response = await pool.query("SELECT NOW()");
    console.log("Hora atual no banco de dados:", response.rows[0].now);
}

module.exports = {
    pool,
    initDB,
};
