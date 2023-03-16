USE [kodehack]

GO

CREATE PROCEDURE getAllUsers

AS

BEGIN

SELECT * FROM users

END

EXEC getAllUsers