USE [kodehack]
GO
CREATE PROCEDURE DeleteUser
    @id VARCHAR(255)
AS
BEGIN
  DELETE FROM users WHERE userId = @id
END

EXEC DeleteUser  @id='2536c041-06e4-4a4b-896d-0cde649a1191'

DROP PROCEDURE DeleteUser

SELECT * FROM users
