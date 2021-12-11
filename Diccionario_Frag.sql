USE EUROPACIFICO

/* DICCIONARIO DE FRAGMENTACIÓN */


-- Se debe almacenar en cada fragmento o en cada servidor

CREATE TABLE dicci_dist_proy (
  id_fragmento tinyint primary key, -- identificador del fragmento
  servidor varchar(100), -- nombre del servidor vinculado
  bd varchar(100), -- nombre de la base que aloja al fragmento
  --name_tabla varchar(100), -- nombre de la tabla que representa fragmento
  col_frag varchar(100) -- columna que se utiliza como criterio de fragmentación
)

CREATE TABLE val_col_frag (
  id_fragmento tinyint,
  val_col varchar(100),
  primary key (id_fragmento, val_col),
  foreign KEY (id_fragmento) REFERENCES dicci_dist_proy (id_fragmento)
)

--INSERT INTO dicci_dist_proy VALUES (2,'SERVERTEST','NORTEAMERICA',/*'Sales.SalesOrderDetail',*/'SalesOrderID');
INSERT INTO dicci_dist_proy VALUES (1,'LSERVER2','NORTEAMERICA',/*'Sales.SalesOrderHeader',*/'TerritoryID');
--INSERT INTO dicci_dist_proy VALUES (3,'SERVERTEST','NORTEAMERICA',/*'Sales.SalesOrderHeaderSalesReason',*/'SalesOrderID');
--INSERT INTO dicci_dist_proy VALUES (5,'SERVERTEST','AdventureWorks2019',/*'Sales.SalesOrderDetail',*/'SalesOrderID');
INSERT INTO dicci_dist_proy VALUES (2,'LSERVER2','AdventureWorks2019',/*'Sales.SalesOrderHeader',*/'TerritoryID');
--INSERT INTO dicci_dist_proy VALUES (6,'SERVERTEST','AdventureWorks2019',/*'Sales.SalesOrderHeaderSalesReason',*/'SalesOrderID');
--INSERT INTO dicci_dist_proy VALUES (8,'LSERVER2','EUROPACIFICO',/*'Sales.SalesOrderDetail',*/'SalesOrderID');
INSERT INTO dicci_dist_proy VALUES (3,'SERVERTEST','EUROPACIFICO',/*'Sales.SalesOrderHeader',*/'TerritoryID');
--INSERT INTO dicci_dist_proy VALUES (9,'LSERVER2','EUROPACIFICO',/*'Sales.SalesOrderHeaderSalesReason',*/'SalesOrderID');

insert into val_col_frag values (1,'1');
insert into val_col_frag values (1,'2');
insert into val_col_frag values (1,'3');
insert into val_col_frag values (1,'4');
insert into val_col_frag values (1,'5');
insert into val_col_frag values (1,'6');

insert into val_col_frag values (3,'7');
insert into val_col_frag values (3,'8');
insert into val_col_frag values (3,'9');
insert into val_col_frag values (3,'10');

/*---------CONSULTAS---------*/

-- Consulta 1
-- Listar el numero de ventas por territorio

create procedure numero_ventas_territorio_listar @territorio nvarchar (100) as
begin
	declare @servidor nvarchar(100);
	declare @sql nvarchar(1000);
	declare @region nvarchar(100);
	declare @servidor1 nvarchar(100);
	declare @region1 nvarchar(100);

	select @servidor = servidor, @region = bd
	from dicci_dist_proy
	where id_fragmento in (select id_fragmento from val_col_frag where val_col = @territorio);

	select @servidor1 = servidor, @region1 = bd
	from dicci_dist_proy
	where id_fragmento = 2;

	set @sql =  'select st.Name as ''Territorio'', count(*) as ''Ventas'' 
				from [' + @servidor + '].' + @region + '.Sales.SalesOrderHeader soh 
				inner join [' + @servidor1 + '].' + @region1 + '.Sales.SalesTerritory st on st.TerritoryID = soh.TerritoryID
				where soh.TerritoryID = ' + @territorio +
				'group by st.Name';

	exec sp_executesql @sql
end

exec numero_ventas_territorio_listar '6'
exec numero_ventas_territorio_listar '9'


-- Consulta 2
-- Listar el numero de ventas por tienda 

create procedure numero_ventas_tienda_listar @tienda nvarchar (100) as
begin
	declare @territorio nvarchar(100);
	declare @servidor nvarchar(100);
	declare @sql nvarchar(1000);
	declare @region nvarchar(100);

	select @servidor = @@SERVERNAME
	
	select @region = bd
	from dicci_dist_proy
	where servidor = @servidor

	select @servidor
	select @region
	select @tienda

	set @sql = 'select @territorio = TerritoryID
				from ['+@servidor+'].(select @region).Sales.Customer
				where StoreID = @tienda'

	--select @servidor = servidor, @region = bd
	--from diccionario_dist
	--where id_fragmento in (select id_fragmento from val_col_frag where val_col = @territorio);

	--set @sql =  'select st.Name as ''Territorio'', count(*) as ''Ventas'' 
	--			from [' + @servidor + '].' + @region + '.Sales.SalesOrderHeader soh 
	--			inner join Sales.SalesTerritory st on st.TerritoryID = soh.TerritoryID
	--			where soh.TerritoryID = ' + @territorio +
	--			'group by st.Name';

	--exec sp_executesql @sql
end

exec numero_ventas_tienda_listar 2


-- Consulta 3
-- Listar el total de clientes que pertenecen a cada territorio
drop procedure numero_clientes_listar
create procedure numero_clientes_listar @territorio nvarchar (100) as
begin
	declare @servidor nvarchar(100);
	declare @sql nvarchar(1000);
	declare @region nvarchar(100);

	select @servidor = servidor, @region = bd
	from dicci_dist_proy
	where bd = 'AdventureWorks2019'
	--id_fragmento in (select id_fragmento from val_col_frag where val_col = @territorio);

	set @sql =  'select st.Name as ''Territorio'', count(*) as ''Total Clientes'' 
				from [' + @servidor + '].' + @region + '.Sales.Customer sc 
				inner join [' + @servidor + '].' + @region + '.Sales.SalesTerritory st on st.TerritoryID = sc.TerritoryID
				where sc.TerritoryID = ' + @territorio + ' and PersonID is not null
				group by st.Name';

	exec sp_executesql @sql
end

exec numero_clientes_listar '6'
exec numero_clientes_listar '9'


-- Consulta 5
-- Listar las ordenes realizadas debidas a anuncio de revista

create procedure razon_ordenes_listar @razon nvarchar(5) as
begin
	declare @servidor nvarchar(100);
	declare @region nvarchar(100);
	declare @servidor1 nvarchar(100);
	declare @region1 nvarchar(100);
	declare @servidor2 nvarchar(100);
	declare @region2 nvarchar(100);

	declare @sql nvarchar(4000);
	

	select @servidor = servidor, @region = bd
	from dicci_dist_proy
	where id_fragmento = 1;

	select @servidor1 = servidor, @region1 = bd
	from dicci_dist_proy
	where id_fragmento = 3;

	select @servidor2 = servidor, @region2 = bd
	from dicci_dist_proy
	where id_fragmento = 2;

	set @sql =  'select soh.SalesOrderID as ''Orden'', sr.Name as ''Razon'', st.Name as ''Territorio'' 
				from ['+ @servidor+'].'+@region+'.Sales.SalesOrderHeaderSalesReason sohsr 
				inner join ['+ @servidor2+'].'+@region2+'.Sales.SalesReason sr on sr.SalesReasonID = sohsr.SalesReasonID
				inner join ['+ @servidor+'].'+@region+'.Sales.SalesOrderHeader soh on soh.SalesOrderID = sohsr.SalesOrderID
				inner join ['+ @servidor2+'].'+@region2+'.Sales.SalesTerritory st on st.TerritoryID = soh.TerritoryID
				where sohsr.SalesReasonID = '+@razon+'
				 union
				select soh.SalesOrderID as ''Orden'', sr.Name as ''Razon'', st.Name as ''Territorio'' 
				from ['+ @servidor1+'].'+@region1+'.Sales.SalesOrderHeaderSalesReason sohsr 
				inner join ['+ @servidor2+'].'+@region2+'.Sales.SalesReason sr on sr.SalesReasonID = sohsr.SalesReasonID
				inner join ['+ @servidor1+'].'+@region1+'.Sales.SalesOrderHeader soh on soh.SalesOrderID = sohsr.SalesOrderID
				inner join ['+ @servidor2+'].'+@region2+'.Sales.SalesTerritory st on st.TerritoryID = soh.TerritoryID
				where sohsr.SalesReasonID = '+@razon+''
	

	exec sp_executesql @sql
end

exec razon_ordenes_listar 4
exec razon_ordenes_listar 3


-- 6.	Listar el total de ordenes hechas por cada representante de ventas
/*select SalesPersonID as 'Representante de Ventas', count(*) as 'Ordenes' from Sales.SalesOrderHeader 
group by SalesPersonID*/

create procedure ordenes_rventas as
begin
	declare @servidor nvarchar(100);
	declare @nom_bd nvarchar(100);
	declare @nom_tabla nvarchar(100);
	declare @sql nvarchar(1000);
	declare @sql1 nvarchar(1000);
	declare @sqlt nvarchar(1000);
	declare @condicion varchar(200);
	declare @i int = 1;
	set @condicion ='SalesPersonID'
	set  @nom_tabla='SalesOrderHeader';

	while @i<4
	begin
		--set @i = @i+1;
		select @servidor = servidor, @nom_bd = bd from dicci_dist_proy where id_fragmento = @i;
		
		set @sql = 'select SalesPersonID as "Representante de Ventas", count(*) as "Ordenes" from ' + @servidor + '.' + @nom_bd + '.Sales.'+ @nom_tabla + ' '+  'group by ' + @condicion +'';
		
		set @i = @i+2

		exec sp_executesql @sql
	end 
end

exec ordenes_rventas;

-- 8.	La suma de total de venta por PersonID
/*select SalesPersonID as 'Representante de Ventas', sum(TotalDue) as 'Total de Ventas' from Sales.SalesOrderHeader 
group by SalesPersonID */

alter procedure ventas_person as
begin
	declare @servidor nvarchar(100);
	declare @nom_bd nvarchar(100);
	declare @nom_tabla nvarchar(100);
	declare @sql nvarchar(1000);
	declare @sql1 nvarchar(1000);
	declare @sqlt nvarchar(1000);
	declare @condicion varchar(200);
	declare @i int = 1;
	set @condicion ='SalesPersonID'
	set  @nom_tabla='SalesOrderHeader';

	while @i<4
	begin
		--set @i = @i+1;
		select @servidor = servidor, @nom_bd = bd from dicci_dist_proy where id_fragmento = @i;
		
		set @sql = 'select '''+@nom_bd+''' as Territorio, SalesPersonID as "Representante de Ventas", sum(TotalDue) as "Total de Ventas" from ' + @servidor + '.' + @nom_bd + '.Sales.'+ @nom_tabla + ' '+  'group by ' + @condicion +'';
		
		set @i = @i+2

		exec sp_executesql @sql
	end 
end

exec ventas_person;

-- 10.	Listar los productos con ofertas en el territorio 5

/*Select  Tabla2.TerritoryID as Territorio, Tabla1.ProductID, Tabla1.SpecialOfferID as Ofertas 
From AmericanServer.AdventureWorks2019.Sales.SalesOrderDetail  as Tabla1  
 	inner join AmericanServer.AdventureWorks2019.Sales.SalesOrderHeader as Tabla2 on Tabla1.SalesOrderID = Tabla2.SalesOrderID 
group by Tabla1.ProductID, Tabla2.TerritoryID, Tabla1.SpecialOfferID
having Tabla2.TerritoryID = 5 and Tabla1.SpecialOfferID > 1 */
create procedure ofertas_terri5 as
begin
	declare @servidor nvarchar(100);
	declare @nom_bd nvarchar(100);
	declare @nom_tabla nvarchar(100);
	declare @sql nvarchar(1000);
	declare @condicion varchar(200);
	declare @nom_tabla2 nvarchar(100);
	declare @i int = 1;
	set  @nom_tabla='SalesOrderDetail';
	set  @nom_tabla2='SalesOrderHeader';

	while @i<4
	begin
		--set @i = @i+1;
		select @servidor = servidor, @nom_bd = bd from dicci_dist_proy where id_fragmento = @i;



		set @sql = 'select Tabla2.TerritoryID as Territorio, Tabla1.ProductID, Tabla1.SpecialOfferID as Ofertas from ' + @servidor + '.' + @nom_bd + '.Sales.'+ @nom_tabla + ' ' +' as Tabla1 ' +' inner join '+ @servidor + '.' + @nom_bd + '.Sales.'+ @nom_tabla2 + ' ' +' as Tabla2 '+' on Tabla1.SalesOrderID = Tabla2.SalesOrderID '+ 'group by ' +'Tabla1.ProductID, Tabla2.TerritoryID, Tabla1.SpecialOfferID ' +'having Tabla2.TerritoryID = 5 and Tabla1.SpecialOfferID > 1 '+'' ;
		
		set @i = @i+2

		exec sp_executesql @sql
	end 
end

exec ofertas_terri5;
-- 13.	Actualizar nombre de tarjeta de crédito SuperiorCard a SCard
/*update Sales.CreditCard set CardType = 'SCard'
where CardType = 'SuperiorCard';
*/
--update AmericanServer.AdventureWorks2019.Sales.CreditCard set CardType='SCard' where  CardType = 'SuperiorCard'

create procedure update_credito as
begin
	declare @servidor nvarchar(100);
	declare @nom_bd nvarchar(100);
	declare @nom_tabla nvarchar(100);
	declare @sql nvarchar(1000);
	declare @condicion varchar(200);
	declare @asignacion varchar(200);

	declare @i int = 0;
	set @condicion ='CardType =''SuperiorCard''';
	set  @nom_tabla= 'CreditCard';
	set @asignacion ='CardType = ''SCard''';

	select @servidor = servidor, @nom_bd = bd from dicci_dist_proy where bd='AdventureWorks2019'; 

		
			set @sql = 'Update ' + @servidor + '.' + @nom_bd + '.Sales.'+ @nom_tabla +' '+ 'set ' +@asignacion +' ' + 'where '+@condicion+'';

		exec sp_executesql @sql
	 
end

exec update_credito; 
-- 14.	Listado de registros donde el ID de territorio de clientes es 1 y 3
/*select * from Sales.Customer where TerritoryID in (1,3)
order by TerritoryID;*/

create procedure cliente_1y3 as
begin
	declare @servidor nvarchar(100);
	declare @nom_bd nvarchar(100);
	declare @nom_tabla nvarchar(100);
	declare @sql nvarchar(1000);
	declare @condicion varchar(200);
	declare @condicion2 varchar(200);
	declare @i int = 0;
	set @condicion ='TerritoryID in (1,3)';
	set @condicion2 ='TerritoryID';
	set  @nom_tabla='Customer';

		select @servidor = servidor, @nom_bd = bd from dicci_dist_proy where bd='AdventureWorks2019';
		
		set @sql = 'select * from ' + @servidor + '.' + @nom_bd + '.Sales.'+ @nom_tabla + ' '+ 'where ' +@condicion + '' + 'order by ' + @condicion2 +'';
		
		exec sp_executesql @sql
	
end

exec cliente_1y3;
-- 15.	Listado de ventas con costo mayor a 2000 y menor a 4000
/*select * from Sales.SalesOrderHeader where TotalDue > 2000 and TotalDue < 4000
order by TotalDue asc;*/

alter procedure ventas_2a4 as
begin
	declare @servidor nvarchar(100);
	declare @nom_bd nvarchar(100);
	declare @nom_tabla nvarchar(100);
	declare @sql nvarchar(1000);
	declare @condicion varchar(200);
	declare @condicion2 varchar(200);
	declare @i int = 1;
	set @condicion ='TotalDue > 2000 and TotalDue < 4000';
	set @condicion2 ='TotalDue';
	set  @nom_tabla='SalesOrderHeader';

	while @i<4
	begin
		--set @i = @i+1;
		select @servidor = servidor, @nom_bd = bd from dicci_dist_proy where id_fragmento = @i;
		
		set @sql = 'select * from ' + @servidor + '.' + @nom_bd + '.Sales.'+ @nom_tabla + ' '+ 'where ' +@condicion + '' + 'order by ' + @condicion2 +'';
		
		set @i = @i+2

		exec sp_executesql @sql
	end 
end

exec ventas_2a4;
--16.	Listado de cambio de moneda de USD a MXN
/*select * from EuropeanServer.Resto.Sales.CurrencyRate where FromCurrencyCode = 'USD' and ToCurrencyCode = 'MXN';*/

create procedure cambio_moneda as
begin
	declare @servidor nvarchar(100);
	declare @nom_bd nvarchar(100);
	declare @nom_tabla nvarchar(100);
	declare @sql nvarchar(1000);
	declare @condicion varchar(200);
	declare @condicion2 varchar(200);
	declare @i int = 0;
	set @condicion = 'FromCurrencyCode = ''USD'' and ToCurrencyCode = ''MXN''';
	set  @nom_tabla='CurrencyRate';

		select @servidor = servidor, @nom_bd = bd from dicci_dist_proy where bd='AdventureWorks2019';
		
		set @sql = 'select * from ' + @servidor + '.' + @nom_bd + '.Sales.'+ @nom_tabla + ' '+ 'where ' +@condicion + '' ;
		exec sp_executesql @sql
		
end

exec cambio_moneda;
