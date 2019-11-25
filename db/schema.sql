DROP DATABASE IF EXISTS hotdog_db;

CREATE DATABASE hotdog_db;

USE hotdog_db;

CREATE TABLE hotdog (
  id INT NOT NULL AUTO_INCREMENT,
  kindof VARCHAR(45) NULL,
  eaten BOOLEAN (),
  PRIMARY KEY (id)
);

INSERT INTO hotdog (kindof)
VALUES ("vanilla");

INSERT INTO products (kindof)
VALUES ("chocolate");

INSERT INTO products (kindof)
VALUES ("strawberry");
