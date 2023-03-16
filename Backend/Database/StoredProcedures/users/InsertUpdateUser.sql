USE [kodehack]

GO

CREATE PROCEDURE InsertUpdateUser

@id VARCHAR(255),
@email VARCHAR(255),
@password VARCHAR(255),
@is_admin BIT,
@is_deleted BIT,
@timeCreated DATE

AS

BEGIN

    IF EXISTS (SELECT * FROM users WHERE userId = @id) 
    BEGIN
        UPDATE users 
        SET email = @email, password = @password, is_admin = @is_admin, is_deleted = @is_deleted,  timeCreated= @timeCreated 
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

EXEC InsertUpdateUser @id=2, @email='kevin', @password='1223445',@is_admin =0,
@is_deleted=1,
@timeCreated='12-13-15'

SELECT * FROM users

DROP PROCEDURE InsertUpdateUser
