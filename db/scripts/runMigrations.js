require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { pool } = require("../config/initDB");

const migrationsDir = path.join(__dirname, "..", "migrations");

// 2. Função para garantir que a tabela 'migrations' existe (executa a migration 000 se precisar)
async function ensureMigrationsTable() {
    // 2.1. Lê o SQL da primeira migration (que cria a tabela migrations)
    const migrationFile = path.join(migrationsDir, "000-create-migrations-table.sql");
    const sql = fs.readFileSync(migrationFile, "utf-8");

    // 2.2. Executa o SQL (cria tabela migrations se não existir)
    await pool.query(sql);
    console.log("Ensured migrations table exists");
}

// 3. Função para buscar no banco quais migrations já rodaram
async function getExecutedMigrations() {
    const res = await pool.query("SELECT filename FROM migrations");
    return res.rows.map((row) => row.filename);
}

// 4. Função para registrar uma migration executada
async function recordMigration(filename) {
    await pool.query("INSERT INTO migrations (filename) VALUES ($1)", [filename]);
    console.log(`Recorded migrations ${filename} in database`);
}

// 5. Função que roda uma migration se ainda não foi executada
async function runMigrationIfNeeded(filePath) {
    const filename = path.basename(filePath);

    // 5.1. Busca migrations executadas
    const executedMigrations = await getExecutedMigrations();

    // 5.2. Verifica se esta migration já rodou
    if (executedMigrations.includes(filename)) {
        console.log(`Skipping alreay executed migration: ${filename}`);
        return;
    }

    // 5.3. Lê e executa o SQL da migration
    const sql = fs.readFileSync(filePath, "utf-8");
    await pool.query(sql);
    console.log(`Executed migration file: ${filename}`);

    // 5.4. Registra no banco que esta migration rodou
    await recordMigration(filename);
}

// 6. Função principal que orquestra tudo
async function runAllMigrations() {
    try {
        // 6.1. Garante que a tabela migrations existe
        await ensureMigrationsTable();

        // 6.2. Lê arquivos da pasta migrations
        const files = fs.readdirSync(migrationsDir);

        // 6.3. Ordena os arquivos pela ordem correta
        files.sort();

        // 6.4. Roda uma a uma as migrations que precisam ser executadas
        for (const file of files) {
            const filePath = path.join(migrationsDir, file);
            await runMigrationIfNeeded(filePath);
        }

        console.log("All migrations processed");
    } catch (error) {
        console.error("migration error:", error);
    } finally {
        // 6.5. Fecha a conexão com o banco
        await pool.end();
    }
}

// 7. Executa as migrations
runAllMigrations();
