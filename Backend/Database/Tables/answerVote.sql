USE kodehack

GO

CREATE TABLE answerVotes (
    voteId VARCHAR(255) PRIMARY KEY, 

    votes VARCHAR(255) NOT NULL,

    timeCreated DATE NOT NULL DEFAULT GETDATE(),
    
    userId VARCHAR(255),
    FOREIGN KEY (userId) REFERENCES users(userId),

    answerId VARCHAR(255),
    FOREIGN KEY (answerId) REFERENCES answers(answerId)

     
);

SELECT * FROM answerVotes

DROP TABLE answerVotes