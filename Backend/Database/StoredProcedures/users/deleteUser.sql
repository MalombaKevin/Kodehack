USE [kodehack]
GO
CREATE PROCEDURE DeleteUser
    @id VARCHAR(255)
AS
BEGIN
    UPDATE Users
    SET is_deleted = 1
    WHERE userId = @id
END

EXEC DeleteUser  @id=1

DROP PROCEDURE DeleteUser

SELECT * FROM users
