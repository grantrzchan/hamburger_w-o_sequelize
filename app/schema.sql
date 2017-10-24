DROP DATABASE IF EXISTS hamburgers_db
USE hamburgers_db

CREATE TABLE hamburgers
(
    id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO hamburgers(burger_name)
VALUES
('Bacon Double Cheeseburger'),
('Mushroom Swiss Cheeseburger'),
('Spicy Chicken Deluxe Sandwich');