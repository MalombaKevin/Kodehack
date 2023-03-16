USE [kodehack]

GO

CREATE PROCEDURE DeleteComment

@id VARCHAR(255)

AS

BEGIN

DELETE FROM comments WHERE commentId =@id 

END

EXECUTE DeleteComment @id=2

SELECT * FROM comments