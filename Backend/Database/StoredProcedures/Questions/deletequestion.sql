
USE [kodehack]

GO

CREATE PROCEDURE deleteQuestion
@id VARCHAR(255)
AS

BEGIN

DELETE FROM question WHERE questionId = @id

END

EXECUTE deleteQuestion @id=2

DROP PROCEDURE deleteQuestion

SELECT * FROM question

