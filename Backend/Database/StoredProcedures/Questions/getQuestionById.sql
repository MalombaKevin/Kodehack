USE [kodehack]

GO

CREATE PROCEDURE getQuestionById

@id VARCHAR(255)
AS

BEGIN

SELECT * FROM question where questionId= @id

END

EXEC getQuestionById @id=1

DROP PROCEDURE getQuestionById