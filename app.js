require("dotenv").config();
const express = require("express");
const { initDB } = require("./db/config/initDB");
//const runAllMigrations = require("./db/scripts/runMigrations");
const errorHandler = require("./src/middleware/errorHandler.js");

//Import Routes
const recipesRoutes = require("./src/routes/recipesRoutes");
const ingredientsRoutes = require("./src/routes/ingredientsRoutes.js");
const recipe_ingredientsRoute = require("./src/routes/recipe_ingredientsRoutes.js");

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(recipesRoutes);
app.use(ingredientsRoutes);
app.use(recipe_ingredientsRoute);

app.get("/", (req, res) => {
    res.json({
        message: "API funcionando!",
        timestamp: new Date().toISOString(),
    });
});

app.use(errorHandler);

async function startServer() {
    try {
        await initDB();
        app.listen(port, () => {
            console.log("Escutando na porta:", port);
            console.log("Banco de dados conectado!");
        });
    } catch (error) {
        console.error("Error starting server:", error);
        process.exit(1);
    }
}

startServer();
