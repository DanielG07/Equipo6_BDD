

--- CREACIÓN DE SERVIDOR VINCULADO 2 CON CÓDIGO

USE master;  
GO  


EXEC sp_addlinkedserver   
   @server = N'EuropeanServer',
   @srvproduct = N'SQLServer',
   @provider = N'SQLOLEDB',
---Cambiar el nombre de datasrc segun el nombre de su servidor que tengan al que se quieran vincular
   @datasrc = N'192.168.0.12\MSSQLSERVER2';
GO

EXEC sp_addlinkedsrvlogin
   @rmtsrvname = N'EuropeanServer',
   @useself = 'FALSE',
   @locallogin = NULL,
---Cambiar el nombre de usuario y contraseña segun el servidor que tengan
   @rmtuser = N'sa',
   @rmtpassword = N'Yuval123';
GO


EXEC sp_serveroption
   @server = 'EuropeanServer',
   @optname = 'collation compatible',
   @optvalue = 'True';
GO

EXEC sp_serveroption
   @server = 'EuropeanServer',
   @optname = 'data access',
   @optvalue = 'True';
GO


EXEC sp_serveroption
   @server = 'EuropeanServer',
   @optname = 'rpc',
   @optvalue = 'True';
GO

EXEC sp_serveroption
   @server = 'EuropeanServer',
   @optname = 'rpc out',
   @optvalue = 'True';
GO

EXEC sp_serveroption
   @server = 'EuropeanServer',
   @optname = 'use remote collation',
   @optvalue = 'True';
GO

EXEC sp_serveroption
   @server = 'EuropeanServer',
   @optname = 'remote proc transaction promotion',
   @optvalue = 'True';
GO

--- PRUEBA DE FUNCIONAMIENTO DE SERVIDOR VINCULADO POR CODIGO 

select top 10 * from EuropeanServer.AdventureWorks2019.Sales.SalesTerritory