DROP DATABASE IF EXISTS hotdog_db;

CREATE DATABASE hotdog_db;

USE hotdog_db;

CREATE TABLE hotdog (
  id INT NOT NULL AUTO_INCREMENT,
  kindof VARCHAR(45) NOT NULL,
  eaten BOOLEAN NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
);

INSERT INTO hotdog (kindof)
VALUES ("Chilli");

INSERT INTO hotdog (kindof)
VALUES ("Cheese");

INSERT INTO hotdog (kindof)
VALUES ("Wawa");
