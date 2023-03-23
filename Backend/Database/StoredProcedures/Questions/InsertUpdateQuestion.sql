USE [kodehack]

GO

CREATE OR ALTER PROCEDURE InsertUpdateQuestion

@id VARCHAR(255),
@title VARCHAR(255),
@category VARCHAR(255),
@question VARCHAR(255)


AS
BEGIN
    IF EXISTS (SELECT * FROM question WHERE questionId = @id) 
    BEGIN
        UPDATE question
        SET title = @title, category = @category, question = @question
        WHERE questionId = @id
    END
    ELSE
    BEGIN
        INSERT INTO question (questionId, title, category, question)
        VALUES (@id, @title, @category, @question)
     
    END
END



SELECT * FROM question

DROP PROCEDURE InsertUpdateQuestion
