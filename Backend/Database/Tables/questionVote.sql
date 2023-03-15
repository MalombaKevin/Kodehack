USE kodehack

GO

CREATE TABLE questionVotes (
    voteId VARCHAR(255) PRIMARY KEY, 

    votes VARCHAR(255) NOT NULL,

    timeCreated DATE NOT NULL DEFAULT GETDATE(),
    
    userId VARCHAR(255),
    FOREIGN KEY (userId) REFERENCES users(userId),

    questionId VARCHAR(255),
    FOREIGN KEY (questionId) REFERENCES question(questionId)
);

SELECT * FROM questionVotes

DROP TABLE questionVotes