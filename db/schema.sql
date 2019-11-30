DROP DATABASE IF EXISTS u7jvolrozed9704e;

CREATE DATABASE u7jvolrozed9704e;

USE u7jvolrozed9704e;

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
