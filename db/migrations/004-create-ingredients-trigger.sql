-- Cria um trigger chamado update_ingredients_last_updated_at.
-- Trigger que dispara a função acima toda vez que um ingrediente é atualizado
-- BEFORE UPDATE = executa antes da atualização ser salva no banco
CREATE TRIGGER update_ingredients_last_updated_at
BEFORE UPDATE ON ingredients 
FOR EACH ROW 
EXECUTE FUNCTION update_last_updated_at(); 