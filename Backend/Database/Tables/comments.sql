USE kodehack

GO

CREATE TABLE comments (
    commentId VARCHAR(255) PRIMARY KEY, 
    comment VARCHAR(255) NOT NULL,
    timeCreated DATE NOT NULL DEFAULT GETDATE(),
    
    userId VARCHAR(255),
    FOREIGN KEY (userId) REFERENCES users(userId),

    answerId VARCHAR(255),
    FOREIGN KEY (answerId) REFERENCES answers(answerId) ON DELETE CASCADE
);

INSERT INTO comments
VALUES ('1', 'YES WE CAN', '12-12-12', '1', '1')

SELECT * FROM comments

DROP TABLE comments