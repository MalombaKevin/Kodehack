USE [kodehack]

GO

CREATE PROCEDURE InsertUpdateQuestion

@id VARCHAR(255),
@title VARCHAR(255),
@category VARCHAR(255),
@question VARCHAR(255),
@timeCreated DATE,
@userId VARCHAR(255)


AS
BEGIN
    IF EXISTS (SELECT * FROM question WHERE questionId = @id) 
    BEGIN
        UPDATE question
        SET title = @title, category = @category, question = @question,timeCreated= @timeCreated, userId = @userId
        WHERE questionId = @id
    END
    ELSE
    BEGIN
        INSERT INTO question (questionId, title, category, question,timeCreated,userId)
        VALUES (@id, @title, @category, @question, @timeCreated, @userId)
     
    END
END

-- EXEC InsertUpdateQuestion @id='5', @title='Sasa', @category='Swahili',@question ='Ukoje',@timeCreated='12-13-15',
-- @userId='1'


SELECT * FROM question

DROP PROCEDURE InsertUpdateQuestion
