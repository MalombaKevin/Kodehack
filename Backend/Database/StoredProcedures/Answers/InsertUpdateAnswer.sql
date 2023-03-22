USE [kodehack]

GO

CREATE OR ALTER PROCEDURE InsertUpdateAnswer

@id VARCHAR(255),
@answer VARCHAR(255),
@questionId VARCHAR(255),
@userId VARCHAR(255)

AS
BEGIN
    IF EXISTS (SELECT * FROM answers WHERE answerId = @id) 
    BEGIN
        UPDATE answers
        SET answer = @answer, questionId = @questionId, userId = @userId
        WHERE answerId = @id
        -- SELECT * FROM answers WHERE answerId = @id
    END
    ELSE
    BEGIN
        INSERT INTO answers (answerId, answer, questionId, userId)
        VALUES (@id, @answer, @questionId, @userId)
        -- SELECT * FROM answers WHERE answerId = @id
    END
END

-- EXECUTE InsertUpdateAnswer @id='3', @answer='Kwega muno', @questionId='1',@userId ='2',
-- @timeCreated='12-12-12'

SELECT * FROM answers

DROP PROCEDURE InsertUpdateAnswer

