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

-- Drop the stored procedure called 'StoredProcedureName' in schema 'SchemaName'

DROP PROCEDURE DeleteUser

SELECT * FROM users
