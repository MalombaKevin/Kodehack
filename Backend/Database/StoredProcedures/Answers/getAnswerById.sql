USE [kodehack]

GO

CREATE PROCEDURE getAnswersById

@id VARCHAR(255)

AS

BEGIN

SELECT * FROM answers WHERE answerId=@id

END

EXECUTE getAnswersById @id=1

DROP PROCEDURE getAnswersById