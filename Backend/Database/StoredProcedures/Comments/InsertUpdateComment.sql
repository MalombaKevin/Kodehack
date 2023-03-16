USE [kodehack]

GO

CREATE PROCEDURE InsertUpdateComment

@id VARCHAR(255),
@comment VARCHAR(255),
@answerId VARCHAR(255),
@userId VARCHAR(255),
@timeCreated DATE

AS
BEGIN
    IF EXISTS (SELECT * FROM comments WHERE commentId = @id) 

    BEGIN
        UPDATE comments
        SET comment = @comment, answerId = answerId, userId = @userId,  timeCreated= @timeCreated 
        WHERE commentId = @id
        SELECT * FROM comments WHERE commentId = @id
    END
    ELSE
    BEGIN
        INSERT INTO comments (commentId, comment, timeCreated, userId, answerId)
        VALUES (@Id, @comment, @timeCreated, @userId,@answerId )
        SELECT * FROM comments WHERE commentId = @id
    END
END

EXEC InsertUpdateComment  @Id='3', @comment='Kama si sasa ni sasa hivi',@timeCreated ='2002-12-12',
@userId=1,
@answerId='1'

SELECT * FROM comments

DROP PROCEDURE InsertUpdateComment
