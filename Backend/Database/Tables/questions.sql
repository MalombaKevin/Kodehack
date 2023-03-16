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


INSERT INTO question
VALUES ('1','Hi','ENG','Hi there', '12-13-15' ,'1')


SELECT * FROM question



DROP TABLE question



ALTER TABLE question
ADD CONSTRAINT fk_question_userId FOREIGN KEY (userId) 
REFERENCES users (userId) ON DELETE CASCADE







-- Drop the existing unique constraint
ALTER TABLE my_table
DROP CONSTRAINT uq_my_column


-- Create the new foreign key constraint with cascade delete
ALTER TABLE my_table
ADD CONSTRAINT fk_my_column FOREIGN KEY (my_column) 
REFERENCES other_table (other_column) ON DELETE CASCADE



