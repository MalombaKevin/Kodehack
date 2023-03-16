USE [kodehack]

GO

CREATE PROCEDURE getAllQuestions

AS 

BEGIN

SELECT * FROM question

END

EXECUTE getAllQuestions

DROP PROCEDURE getAllQuestions
