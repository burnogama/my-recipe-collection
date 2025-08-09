CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    yield_amount INTEGER NOT NULL,
    cost_price NUMERIC(10,2) NOT NULL,
    instructions TEXT,
    notes TEXT,
    created_at TIMESTAMP DEFAULT NOW()
)