USE [kodehack]

GO

CREATE PROCEDURE getCommentById
@id VARCHAR(255)

AS

BEGIN

SELECT * FROM comments 
WHERE commentId = @id

END

EXECUTE getCommentById @id=1