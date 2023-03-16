USE [kodehack]
GO
CREATE PROCEDURE GetUserById
@id VARCHAR(255)
AS
BEGIN
    SELECT * FROM users WHERE userId = @id
END

EXEC GetUserById @id=1