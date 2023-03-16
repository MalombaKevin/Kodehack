USE [kodehack]

GO

CREATE PROCEDURE deleteAnswer

@id VARCHAR(255)

AS

BEGIN

DELETE FROM answers WHERE answerID=@id

END

EXECUTE deleteAnswer @id=2

SELECT * FROM answers

