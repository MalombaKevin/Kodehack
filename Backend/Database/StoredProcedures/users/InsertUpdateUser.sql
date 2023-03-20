USE [kodehack]

GO

CREATE PROCEDURE InsertUpdateUser

@id VARCHAR(255),
@email VARCHAR(255),
@password VARCHAR(255)

AS

BEGIN

    IF EXISTS (SELECT * FROM users WHERE userId = @id) 
    BEGIN
        UPDATE users 
        SET email = @email, password = @password
        WHERE userId = @id
        SELECT * FROM users WHERE userId = @id
    END
    ELSE
    BEGIN
        INSERT INTO users (userId, email, password)
        VALUES (@id, @email, @password)
        SELECT * FROM users WHERE userId = @id
    END
END



SELECT * FROM users

DROP PROCEDURE InsertUpdateUser
