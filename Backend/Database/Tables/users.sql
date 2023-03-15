
CREATE DATABASE kodehack

USE kodehack

GO

CREATE TABLE users (
    userId VARCHAR(255) PRIMARY KEY, 
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    timeCreated DATE NOT NULL DEFAULT GETDATE(),
    is_admin BIT NOT NULL DEFAULT 0,
    is_deleted BIT NOT NULL DEFAULT 0,
);

SELECT * from users


INSERT INTO users
VALUES ('1', 'willymalomba', '235595', '12-13-15', 0, 1)

DROP TABLE users

DROP DATABASE kodehack




