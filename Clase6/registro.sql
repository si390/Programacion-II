CREATE SCHEMA db;

USE db;

CREATE TABLE usuarios(
	id int unsigned primary key auto_increment,
	email varchar(100) not null, 
	contraseña varchar(12) not null,
	fecha datetime not null,
	dni int unique not null, 
	foto text,

createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

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

insert into genres
values (default, null, null, "Romance", 15, 1);

