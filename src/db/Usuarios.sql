
DROP TABLE IF EXISTS Usuarios CASCADE; 
/*
DROP TABLE IF EXISTS UsuariosRoles CASCADE;

*/

CREATE TABLE Usuarios( 
	Id SERIAL primary key  NOT NULL,
	Correo varchar(255) NOT NULL,
	Clave varchar(255) NOT NULL,
	Nombres varchar(160) NOT NULL,
	ApellidoPaterno varchar(160) NOT NULL,
	ApellidoMaterno varchar(160),
    Avatar varchar(255) NULL,
	FechaCreacion timestamp with time zone NOT NULL,
	FechaModificacion timestamp with time zone NULL,	
	Activo varchar(2) NOT NULL);

alter table Usuarios alter column FechaCreacion set default (now() at time zone 'utc');
alter table Usuarios alter column Activo set default 'SI';

alter table Usuarios add constraint Usuarios_Usuario_ukey UNIQUE (Correo);


INSERT INTO Usuarios
(Correo, 
 Clave, 
 Nombres, 
 ApellidoPaterno, 
 ApellidoMaterno
)
VALUES
('guadalupe.urias@tsj.gob.mx', 
 pgp_sym_encrypt('PasswordTempor@l', 'sha1'), 
 'María Guadalupe', 
 'Urías', 
 'Castro'
);

SELECT *
FROM Usuarios;

--SELECT pgp_sym_encrypt('some string', 'sha1');
--SELECT digest('blah', 'sha256');
