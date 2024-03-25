CREATE SCHEMA db;

USE db;

CREATE TABLE peliculas(
	id INT UNSIGNED PRIMARY KEY auto_increment,
    nombre VARCHAR(200)
);

USE movies_db;

CREATE TABLE productora(
	id INT UNSIGNED PRIMARY KEY auto_increment,
    nombre VARCHAR(100) NOT NULL,
    ranking DECIMAL UNSIGNED UNIQUE,
    activo TINYINT DEFAULT 1 NOT NULL,
    fecha DATETIME
);