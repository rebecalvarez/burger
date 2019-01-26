
-- CREATE DATABASE burgers_db;
-- USE burgers_db;

CREATE DATABASE w60y0tzv3iht5lr4;
USE w60y0tzv3iht5lr4;


CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
