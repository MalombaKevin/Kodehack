
CREATE DATABASE kodehack


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

-- use kodehack
INSERT INTO users
VALUES ('1','Kevin Malomba','admin@gmail.com', '1234567', '12-13-15',   1, 0, 0, 0)

SELECT * FROM users WHERE welcome_sent=0

DROP TABLE users

DELETE FROM users

UPDATE users
SET is_admin = 1
where email = 'admin@gmail.com'

-- USE kodehack
DROP DATABASE kodehack




