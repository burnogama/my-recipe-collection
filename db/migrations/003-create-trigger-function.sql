-- Cria uma função chamada update_last_updated_at
-- Função que atualiza automaticamente a coluna last_updated_at
-- Usada em triggers BEFORE UPDATE para marcar quando registro foi modificado
CREATE OR REPLACE FUNCTION update_last_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.last_updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql; 
-- plpgsql — uma linguagem procedural do PostgreSQL para escrever funções.


