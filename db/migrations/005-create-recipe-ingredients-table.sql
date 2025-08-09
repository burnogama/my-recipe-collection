CREATE TABLE recipe_ingredients (
    recipe_id INTEGER REFERENCES recipes(id),
    ingredient_id INTEGER REFERENCES ingredients(id),
    quantity NUMERIC(10,2) NOT NULL,
    unit VARCHAR(10) NOT NULL,

    PRIMARY KEY (recipe_id, ingredient_id)
)