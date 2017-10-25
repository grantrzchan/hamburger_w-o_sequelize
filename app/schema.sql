DROP DATABASE IF EXISTS hamburgers_db
USE hamburgers_db

CREATE TABLE hamburgers
(
    id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY(id)
);

INSERT INTO hamburgers(burger_name,devoured)
VALUES
('Bacon Double Cheeseburger',FALSE),
('Mushroom Swiss Cheeseburger',FALSE),
('Spicy Chicken Deluxe Sandwich',TRUE);