-- RECIPES
INSERT INTO recipes (name, description, yield_amount, cost_price, instructions, notes) VALUES
('Lasanha da Vó', 'Deliciosa lasanha tradicional com molho branco e carne moída.', 800, 25.50, 'Cozinhe a massa, faça o molho, monte camadas e asse por 40 minutos.', 'Receita da família, ótima para almoço de domingo.'),
('Salada Caesar', 'Salada fresca com alface, croutons e molho Caesar.', 300, 8.20, 'Misture todos os ingredientes e sirva gelado.', 'Ótima para acompanhamento leve.'),
('Frango Grelhado', 'Peito de frango temperado e grelhado.', 250, 12.00, 'Tempere o frango e grelhe até dourar.', 'Pode adicionar limão para sabor extra.'),
('Sopa de Legumes', 'Sopa quente e nutritiva com diversos legumes.', 1000, 15.30, 'Refogue os legumes e cozinhe com caldo até ficarem macios.', 'Ideal para dias frios.'),
('Bolo de Chocolate', 'Bolo fofinho e úmido de chocolate.', 500, 18.75, 'Misture os ingredientes, asse por 35 minutos.', 'Perfeito para festas e sobremesas.');

--INGREDIENTS
INSERT INTO ingredients (name, unit_price, unit) VALUES
('Farinha de Trigo', 2.50, 'kg'),
('Carne Moída', 18.90, 'kg'),
('Alface', 1.20, 'unit'),
('Peito de Frango', 15.00, 'kg'),
('Tomate', 3.00, 'kg'),
('Queijo Mussarela', 22.50, 'kg'),
('Chocolate em Pó', 10.00, 'kg'),
('Ovo', 0.50, 'unit');

--RECIPE_INGREDIENTS
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit) VALUES
(1, 1, 0.5, 'kg'),  
(1, 2, 0.7, 'kg'),  
(1, 6, 0.3, 'kg'),  
(1, 8, 3, 'unit'),  

(2, 3, 2, 'unit'),  
(2, 5, 0.4, 'kg'),  
(2, 8, 1, 'unit'),  


(3, 4, 0.4, 'kg'),  
(3, 8, 2, 'unit'),  


(4, 5, 0.5, 'kg'),  
(4, 3, 1, 'unit'),  

(5, 1, 0.3, 'kg'),  
(5, 7, 0.2, 'kg'),  
(5, 8, 4, 'unit');  