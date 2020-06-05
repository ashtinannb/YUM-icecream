CREATE DATABASE IF NOT EXISTS icecream_db;
USE icecream_db;

DROP TABLE IF EXISTS icecream;

CREATE TABLE icecream (
    id int NOT NULL AUTO_INCREMENT,
    icecream_name varchar(100) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);