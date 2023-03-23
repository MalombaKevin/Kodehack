USE [kodehack]

GO

CREATE PROCEDURE InsertUpdateQuestion

@id VARCHAR(255),
@title VARCHAR(255),
@category VARCHAR(255),
@question VARCHAR(255),
@userId VARCHAR(255)


AS
BEGIN
    IF EXISTS (SELECT * FROM question WHERE questionId = @id) 
    BEGIN
        UPDATE question
        SET title = @title, category = @category, question = @question,userId = @userId
        WHERE questionId = @id
    END
    ELSE
    BEGIN
        INSERT INTO question (questionId, title, category, question,userId)
        VALUES (@id, @title, @category, @question,@userId)
     
    END
END



SELECT * FROM question

DROP PROCEDURE InsertUpdateQuestion
