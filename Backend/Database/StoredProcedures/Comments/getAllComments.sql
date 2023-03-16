USE [kodehack]

GO

CREATE PROCEDURE getAllComments

AS

BEGIN

SELECT * FROM comments

END

EXECUTE getAllComments