/*La base de datos debe ser creada desde el explorador*/
/* Borrar base de datos, usuario*/
--DROP DATABASE if exists consultorios;
--DROP USER if exists consultorio;

/* Crear base de datos, usuario y otorgar permisos*/
CREATE DATABASE consultorios;
CREATE USER consultorio WITH ENCRYPTED PASSWORD 'PasswordTempor@l';
GRANT ALL PRIVILEGES ON DATABASE consultorios to consultorio;

/* Activar la extensión de cifrado*/
CREATE EXTENSION IF NOT EXISTS pgcrypto;