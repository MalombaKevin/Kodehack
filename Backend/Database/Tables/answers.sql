USE kodehack

GO

CREATE TABLE answers (
    answerId VARCHAR(255) PRIMARY KEY, 
    answer VARCHAR(255) NOT NULL,
    timeCreated DATE NOT NULL DEFAULT GETDATE(),
    
    userId VARCHAR(255),
    FOREIGN KEY (userId) REFERENCES users(userId),

    questionId VARCHAR(255),
    FOREIGN KEY (questionId) REFERENCES question(questionId) ON DELETE CASCADE
);

SELECT * FROM answers

INSERT INTO answers
VALUES('1','Bonjour', '12-12-23', '1', '1')

DROP TABLE answers