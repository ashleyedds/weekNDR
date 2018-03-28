DROP DATABASE IF EXISTS blogger;
CREATE DATABASE blogger;
USE blogger;

INSERT INTO Authors (firstName, lastName, email, password, weeklyFunds, bank, createdAt, updatedAt)
VALUES ('Ryan', 'OConnor', 'ryan@email.com', 'abc123', 1500, 546, NOW(), NOW());
INSERT INTO Authors (firstName, lastName, email, password, weeklyFunds, bank, createdAt, updatedAt)
VALUES ('Mary', 'Smith', 'mary@email.com', 'abc123', 500, 5946, NOW(), NOW());
INSERT INTO Authors (firstName, lastName, email, password, weeklyFunds, bank, createdAt, updatedAt)
VALUES ('Shelly', 'Higgins', 'shelly@email.com', 'abc123', 400, 3743, NOW(), NOW());
INSERT INTO Authors (firstName, lastName, email, password, weeklyFunds, bank, createdAt, updatedAt)
VALUES ('David', 'Silfen', 'david@email.com', 'abc123', 2000, 16, NOW(), NOW());
INSERT INTO Authors (firstName, lastName, email, password, weeklyFunds, bank, createdAt, updatedAt)
VALUES ('Robert', 'Crouch', 'robert@email.com', 'abc123', 1200, 231, NOW(), NOW());
INSERT INTO Authors (firstName, lastName, email, password, weeklyFunds, bank, createdAt, updatedAt)
VALUES ('James', 'Johnson', 'james@email.com', 'abc123', 800, 543, NOW(), NOW());
INSERT INTO Authors (firstName, lastName, email, password, weeklyFunds, bank, createdAt, updatedAt)
VALUES ('Brad', 'Feren', 'brad@email.com', 'abc123', 100, 678, NOW(), NOW());
INSERT INTO Authors (firstName, lastName, email, password, weeklyFunds, bank, createdAt, updatedAt)
VALUES ('Amber', 'Cates', 'amber@email.com', 'abc123', 250, 546, NOW(), NOW());
INSERT INTO Authors (firstName, lastName, email, password, weeklyFunds, bank, createdAt, updatedAt)
VALUES ('Eric', 'Anderson', 'eric@email.com', 'abc123', 432, 0, NOW(), NOW());
INSERT INTO Authors (firstName, lastName, email, password, weeklyFunds, bank, createdAt, updatedAt)
VALUES ('Brooks', 'Nichols', 'brooks@email.com', 'abc123', 57, 0, NOW(), NOW());

INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('movies', 'going out to movies and dinner with firends', 30, NOW(), NOW(), 1);
INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('shopping', 'going out to shopping with firends', 45, NOW(), NOW(), 1);
INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('concert', 'going out to concert with firends', 125, NOW(), NOW(), 1);

INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('concert', 'going out to concert with firends', 30, NOW(), NOW(), 2);
INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('movies', 'going out to movies and dinner with firends', 30, NOW(), NOW(), 2);
INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('shopping', 'going out to shopping with firends', 25, NOW(), NOW(), 2);
INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('dinner', 'going out to dinner with firends', 50, NOW(), NOW(), 2);

INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('movies', 'going out to movies and dinner with firends', 30, NOW(), NOW(), 2);

INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('movies', 'going out to movies and dinner with firends', 15, NOW(), NOW(), 3);
INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('dinner', 'going out to dinner with firends', 30, NOW(), NOW(), 3);

INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('shopping', 'going out to shopping with firends', 30, NOW(), NOW(), 4);
INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('movies', 'going out to movies and dinner with firends', 10, NOW(), NOW(), 4);
INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('dinner', 'going out to dinner with firends', 12, NOW(), NOW(), 4);

INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('movies', 'going out to movies and dinner with firends', 30, NOW(), NOW(), 5);
INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('shopping', 'going out to shopping with firends', 45, NOW(), NOW(), 5);
INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('concert', 'going out to concert with firends', 55, NOW(), NOW(), 5);

INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('movies', 'going out to movies and dinner with firends', 60, NOW(), NOW(), 6);
INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('movies', 'going out to movies and dinner with firends', 70, NOW(), NOW(), 6);

INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('movies', 'going out to movies and dinner with firends', 25, NOW(), NOW(), 7);
INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('concert', 'going out to concert with firends', 70, NOW(), NOW(), 7);
INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('shopping', 'going out to shopping with firends', 85, NOW(), NOW(), 7);
INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('dinner', 'going out to dinner with firends', 150, NOW(), NOW(), 7);
INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('drinks', 'going out for drinks with firends', 300, NOW(), NOW(), 7);
INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('outtings', 'going out to the beach and dinner with firends', 30, NOW(), NOW(), 7);

INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('dinner', 'going out to dinner with firends', 30, NOW(), NOW(), 8);
INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('movies', 'going out to movies and dinner with firends', 30, NOW(), NOW(), 8);
INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('shopping', 'going out to shopping with firends', 30, NOW(), NOW(), 8);
INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('concert', 'going out to concert with firends', 30, NOW(), NOW(), 8);
INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('movies', 'going out to movies and dinner with firends', 30, NOW(), NOW(), 8);
INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('outtings', 'going out to the beach and dinner with firends', 40, NOW(), NOW(), 7);

INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('dinner', 'going out to dinner with firends', 50, NOW(), NOW(), 9);

INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('movies', 'going out to movies and dinner with firends', 40, NOW(), NOW(), 10);
INSERT INTO Posts (title, body, estCost, createdAt, updatedAt, AuthorId)
VALUES ('concert', 'going out to concert with firends', 25, NOW(), NOW(), 10);


SELECT * FROM Posts;

SELECT * FROM Authors;