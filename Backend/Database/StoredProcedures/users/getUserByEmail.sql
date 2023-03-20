USE [kodehack]
GO
CREATE PROCEDURE GetUserByEmail
@email VARCHAR(255)
AS
BEGIN
    SELECT * FROM users WHERE email = @email
END

EXEC GetUserByEmail @email=willymalomba

DROP PROCEDURE GetUserByEmail