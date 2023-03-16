USE [kodehack]

GO

CREATE PROCEDURE getAllAnswers

AS

BEGIN
 
 SELECT * FROM answers

END

EXECUTE getAllAnswers

DROP PROCEDURE getAllAnswers