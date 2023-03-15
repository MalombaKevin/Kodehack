USE kodehack

GO

CREATE TABLE comments (
    commentId VARCHAR(255) PRIMARY KEY, 
    comment VARCHAR(255) NOT NULL,
    timeCreated DATE NOT NULL DEFAULT GETDATE(),
    
    userId VARCHAR(255),
    FOREIGN KEY (userId) REFERENCES users(userId),

    answerId VARCHAR(255),
    FOREIGN KEY (answerId) REFERENCES answers(answerId)
);

SELECT * FROM comments

DROP TABLE comments