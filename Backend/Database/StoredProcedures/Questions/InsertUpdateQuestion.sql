USE [kodehack]

GO

CREATE PROCEDURE InsertUpdateQuestion

@id VARCHAR(255),
@title VARCHAR(255),
@category VARCHAR(255),
@question VARCHAR(255),
@userId VARCHAR(255),
@timeCreated DATE

AS
BEGIN
    IF EXISTS (SELECT * FROM question WHERE questionId = @id) 
    BEGIN
        UPDATE question
        SET title = @title, category = @category, question = @question, userId = @userId,  timeCreated= @timeCreated 
        WHERE questionId = @id
        SELECT * FROM question WHERE questionId = @id
    END
    ELSE
    BEGIN
        INSERT INTO question (questionId, title, category, question)
        VALUES (@Id, @title, @category, @question)
        SELECT * FROM question WHERE questionId = @id
    END
END

EXEC InsertUpdateQuestion @id='2', @title='Sasa', @category='Swahili',@question ='Ukoje',
@userId=1,
@timeCreated='12-13-15'

SELECT * FROM question

DROP PROCEDURE InsertUpdateQuestion
