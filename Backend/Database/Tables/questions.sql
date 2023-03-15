USE kodehack

GO

CREATE TABLE question (
    questionId VARCHAR(255) PRIMARY KEY, 
    title VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    question VARCHAR(255) NOT NULL,
    timeCreated DATE NOT NULL DEFAULT GETDATE(),
    userId VARCHAR(255),
    FOREIGN KEY (userId) REFERENCES users(userId)
);

SELECT * FROM question

DROP TABLE question