
CREATE DATABASE kodehack

USE kodehack

GO

CREATE TABLE users (
   
    userId VARCHAR(255) PRIMARY KEY, 
    username VARCHAR (255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    timeCreated DATE NOT NULL DEFAULT GETDATE(),
    is_admin BIT NOT NULL DEFAULT 0,
    is_deleted BIT NOT NULL DEFAULT 0,
    welcome_sent BIT NOT NULL DEFAULT 0,
    forgot_sent BIT NOT NULL DEFAULT 0
);




SELECT * from users

INSERT INTO users
VALUES ('1','Kevin Malomba','willymalomba', '235595', '12-13-15', 0, 1, 0, 0)

SELECT * FROM users WHERE welcome_sent=0

DROP TABLE users

DROP DATABASE kodehack




