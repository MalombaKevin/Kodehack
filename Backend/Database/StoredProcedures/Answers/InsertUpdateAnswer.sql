USE [kodehack]

GO

CREATE PROCEDURE InsertUpdateAnswer

@id VARCHAR(255),
@answer VARCHAR(255),
@questionId VARCHAR(255),
@userId VARCHAR(255),
@timeCreated DATE

AS
BEGIN
    IF EXISTS (SELECT * FROM answers WHERE answerId = @id) 
    BEGIN
        UPDATE answers
        SET answer = @answer, questionId = @questionId, userId = @userId,  timeCreated= @timeCreated 
        WHERE answerId = @id
        SELECT * FROM answers WHERE answerId = @id
    END
    ELSE
    BEGIN
        INSERT INTO answers (answerId, answer, timeCreated, userId, questionId)
        VALUES (@Id, @answer,  @timeCreated,@questionId, @userId)
        SELECT * FROM answers WHERE answerId = @id
    END
END

EXECUTE InsertUpdateAnswer @id='3', @answer='Kwega muno', @questionId='1',@userId ='2',
@timeCreated='12-12-12'

SELECT * FROM answers

DROP PROCEDURE InsertUpdateAnswer

