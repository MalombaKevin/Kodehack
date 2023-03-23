USE kodehack

GO

CREATE TABLE question
(
    questionId VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    question VARCHAR(255) NOT NULL,
    timeCreated DATE NOT NULL DEFAULT GETDATE(),
    userId VARCHAR(255),
    FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE CASCADE,
    is_checked BIT NOT NULL DEFAULT 0,
);


INSERT INTO question
VALUES
    ('1', 'Hi', 'ENG', 'Hi there', '12-13-15' , '1', 0)

USE kodehack

GO
SELECT *
FROM question

DROP TABLE question






