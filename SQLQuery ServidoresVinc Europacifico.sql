--- CREACIÓN DE SERVIDOR VINCULADO AUTOREFERENCIADO CON CÓDIGO
use EUROPACIFICO

USE master;  
GO  


EXEC sp_addlinkedserver   
   @server = N'SERVERTEST',
   @srvproduct = N'SQLServer',
   @provider = N'SQLOLEDB',
---Cambiar el nombre de datasrc segun el nombre de su servidor que tengan al que se quieran vincular
   @datasrc = N'192.168.0.12\MSSQLSERVER2';
GO

EXEC sp_addlinkedsrvlogin
   @rmtsrvname = N'SERVERTEST',
   @useself = 'FALSE',
   @locallogin = NULL,
---Cambiar el nombre de usuario y contraseña segun el servidor que tengan
   @rmtuser = N'sa',
   @rmtpassword = N'Yuval1302';
GO


EXEC sp_serveroption
   @server = 'SERVERTEST',
   @optname = 'collation compatible',
   @optvalue = 'True';
GO

EXEC sp_serveroption
   @server = 'SERVERTEST',
   @optname = 'data access',
   @optvalue = 'True';
GO


EXEC sp_serveroption
   @server = 'SERVERTEST',
   @optname = 'rpc',
   @optvalue = 'True';
GO

EXEC sp_serveroption
   @server = 'SERVERTEST',
   @optname = 'rpc out',
   @optvalue = 'True';
GO

EXEC sp_serveroption
   @server = 'SERVERTEST',
   @optname = 'use remote collation',
   @optvalue = 'True';
GO

EXEC sp_serveroption
   @server = 'SERVERTEST',
   @optname = 'remote proc transaction promotion',
   @optvalue = 'True';
GO

---------------------------------------------------
--- CREACIÓN DE SERVIDOR VINCULADO 1 CON CÓDIGO

USE master;  
GO  


EXEC sp_addlinkedserver   
   @server = N'LSERVER2',
   @srvproduct = N'SQLServer',
   @provider = N'SQLOLEDB',
---Cambiar el nombre de datasrc segun el nombre de su servidor que tengan al que se quieran vincular
   @datasrc = N'192.168.0.12\MSSQLSERVER1';
GO

EXEC sp_addlinkedsrvlogin
   @rmtsrvname = N'LSERVER2',
   @useself = 'FALSE',
   @locallogin = NULL,
---Cambiar el nombre de usuario y contraseña segun el servidor que tengan
   @rmtuser = N'sa',
   @rmtpassword = N'Yuval1302';
GO


EXEC sp_serveroption
   @server = 'LSERVER2',
   @optname = 'collation compatible',
   @optvalue = 'True';
GO

EXEC sp_serveroption
   @server = 'LSERVER2',
   @optname = 'data access',
   @optvalue = 'True';
GO


EXEC sp_serveroption
   @server = 'LSERVER2',
   @optname = 'rpc',
   @optvalue = 'True';
GO

EXEC sp_serveroption
   @server = 'LSERVER2',
   @optname = 'rpc out',
   @optvalue = 'True';
GO

EXEC sp_serveroption
   @server = 'LSERVER2',
   @optname = 'use remote collation',
   @optvalue = 'True';
GO

EXEC sp_serveroption
   @server = 'LSERVER2',
   @optname = 'remote proc transaction promotion',
   @optvalue = 'True';
GO
