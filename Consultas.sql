-- Consulta 1
-- Listar el numero de ventas por territorio

create procedure numero_ventas_territorio_listar @territorio nvarchar (100) as
begin
	declare @servidor nvarchar(100);
	declare @sql nvarchar(1000);
	declare @region nvarchar(100);

	select @servidor = servidor, @region = bd
	from diccionario_dist
	where id_fragmento in (select id_fragmento from val_col_frag where val_col = @territorio);

	set @sql =  'select st.Name as ''Territorio'', count(*) as ''Ventas'' 
				from [' + @servidor + '].' + @region + '.Sales.SalesOrderHeader soh 
				inner join Sales.SalesTerritory st on st.TerritoryID = soh.TerritoryID
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
	declare @Parametros nvarchar(500);

	select @servidor = @@SERVERNAME
	
	select @region = bd
	from diccionario_dist
	where servidor = @servidor

	select @servidor
	select @region

	select @sql = N'select @territorioOUT = TerritoryID
				from ['+@servidor+'].['+@region+'].Sales.Customer
				where StoreID =' +@tienda

	set @Parametros = N'@territorioOUT nvarchar (100) OUTPUT'

	exec sp_executesql @sql, @Parametros, @territorioOUT=@territorio OUTPUT

	if (isnull(@territorio,0) = 0)
	begin
		select 'null'
		select @servidor = servidor, @region = bd
		from diccionario_dist
		where servidor not in (@servidor);

		select @servidor
		select @region

		exec sp_executesql @sql, @Parametros, @territorioOUT=@territorio OUTPUT

		select @territorio

		if (isnull(@territorio,0) = 0)
		begin
			select 'Error: Territorio no encontrado'
		end
		else
		begin
			 select 'no null'
			 set @sql =  'select st.Name as ''Territorio'', count(*) as ''Ventas'' 
					from [' + @servidor + '].' + @region + '.Sales.SalesOrderHeader soh 
					inner join Sales.SalesTerritory st on st.TerritoryID = soh.TerritoryID
					where soh.TerritoryID = ' + @territorio +
					'group by st.Name';

			exec sp_executesql @sql
		end
	end
	else
	begin
		 select 'no null'
		 set @sql =  'select st.Name as ''Territorio'', count(*) as ''Ventas'' 
				from [' + @servidor + '].' + @region + '.Sales.SalesOrderHeader soh 
				inner join Sales.SalesTerritory st on st.TerritoryID = soh.TerritoryID
				where soh.TerritoryID = ' + @territorio +
				'group by st.Name';

		exec sp_executesql @sql
	end
end

exec numero_ventas_tienda_listar 322


-- Consulta 3
-- Listar el total de clientes que pertenecen a cada territorio

create procedure numero_clientes_listar @territorio nvarchar (100) as
begin
	declare @servidor nvarchar(100);
	declare @sql nvarchar(1000);
	declare @region nvarchar(100);

	select @servidor = servidor, @region = bd
	from diccionario_dist
	where id_fragmento in (select id_fragmento from val_col_frag where val_col = @territorio);

	set @sql =  'select st.Name as ''Territorio'', count(*) as ''Total Clientes'' 
				from [' + @servidor + '].' + @region + '.Sales.Customer sc 
				inner join Sales.SalesTerritory st on st.TerritoryID = sc.TerritoryID
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

	declare @sql nvarchar(4000);
	

	select @servidor = servidor, @region = bd
	from diccionario_dist
	where id_fragmento = 1;

	select @servidor1 = servidor, @region1 = bd
	from diccionario_dist
	where id_fragmento = 2;

	set @sql =  'select soh.SalesOrderID as ''Orden'', sr.Name as ''Razon'', st.Name as ''Territorio'' 
				from ['+ @servidor+'].'+@region+'.Sales.SalesOrderHeaderSalesReason sohsr 
				inner join ['+ @servidor+'].'+@region+'.Sales.SalesReason sr on sr.SalesReasonID = sohsr.SalesReasonID
				inner join ['+ @servidor+'].'+@region+'.Sales.SalesOrderHeader soh on soh.SalesOrderID = sohsr.SalesOrderID
				inner join ['+ @servidor+'].'+@region+'.Sales.SalesTerritory st on st.TerritoryID = soh.TerritoryID
				where sohsr.SalesReasonID = '+@razon+'
				 union
				select soh.SalesOrderID as ''Orden'', sr.Name as ''Razon'', st.Name as ''Territorio'' 
				from ['+ @servidor1+'].'+@region1+'.Sales.SalesOrderHeaderSalesReason sohsr 
				inner join ['+ @servidor1+'].'+@region1+'.Sales.SalesReason sr on sr.SalesReasonID = sohsr.SalesReasonID
				inner join ['+ @servidor1+'].'+@region1+'.Sales.SalesOrderHeader soh on soh.SalesOrderID = sohsr.SalesOrderID
				inner join ['+ @servidor1+'].'+@region1+'.Sales.SalesTerritory st on st.TerritoryID = soh.TerritoryID
				where sohsr.SalesReasonID = '+@razon+''
	

	exec sp_executesql @sql
end

exec razon_ordenes_listar 4
exec razon_ordenes_listar 3


-- 6.	Listar el total de ordenes hechas por cada representante de ventas
/*select SalesPersonID as 'Representante de Ventas', count(*) as 'Ordenes' from Sales.SalesOrderHeader 
group by SalesPersonID*/

alter procedure ordenes_rventas as
begin
	declare @servidor nvarchar(100);
	declare @nom_bd nvarchar(100);
	declare @nom_tabla nvarchar(100);
	declare @sql nvarchar(1000);
	declare @sql1 nvarchar(1000);
	declare @sqlt nvarchar(1000);
	declare @condicion varchar(200);
	declare @i int = 0;
	set @condicion ='SalesPersonID'
	set  @nom_tabla='SalesOrderHeader';

	while @i<2
	begin
		set @i = @i+1;
		select @servidor = servidor, @nom_bd = bd from diccionario_dist where id_fragmento = @i;
		
		set @sql = 'select SalesPersonID as "Representante de Ventas", count(*) as "Ordenes" from ' + @servidor + '.' + @nom_bd + '.Sales.'+ @nom_tabla + ' '+  'group by ' + @condicion +'';
		
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
	declare @i int = 0;
	set @condicion ='SalesPersonID'
	set  @nom_tabla='SalesOrderHeader';

	while @i<2
	begin
		set @i = @i+1;
		select @servidor = servidor, @nom_bd = bd from diccionario_dist where id_fragmento = @i;
		
		set @sql = 'select '''+@servidor+''' as Territorio, SalesPersonID as "Representante de Ventas", sum(TotalDue) as "Total de Ventas" from ' + @servidor + '.' + @nom_bd + '.Sales.'+ @nom_tabla + ' '+  'group by ' + @condicion +'';
		
		exec sp_executesql @sql
	end 
end

exec ventas_person;

-- 13.	Actualizar nombre de tarjeta de crédito SuperiorCard a SCard
/*update Sales.CreditCard set CardType = 'SCard'
where CardType = 'SuperiorCard';
*/
--update AmericanServer.AdventureWorks2019.Sales.CreditCard set CardType='SCard' where  CardType = 'SuperiorCard'

alter procedure update_credito as
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

	while @i<2
	begin
		set @i = @i+1;
		select @servidor = servidor, @nom_bd = bd from diccionario_dist where id_fragmento = @i;
		
			set @sql = 'Update ' + @servidor + '.' + @nom_bd + '.Sales.'+ @nom_tabla +' '+ 'set ' +@asignacion +' ' + 'where '+@condicion+'';

		exec sp_executesql @sql
		end 
end

exec update_credito; 
-- 14.	Listado de registros donde el ID de territorio de clientes es 1 y 3
/*select * from Sales.Customer where TerritoryID in (1,3)
order by TerritoryID;*/

alter procedure cliente_1y3 as
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

	while @i<2
	begin
		set @i = @i+1;
		select @servidor = servidor, @nom_bd = bd from diccionario_dist where id_fragmento = @i;
		
		set @sql = 'select * from ' + @servidor + '.' + @nom_bd + '.Sales.'+ @nom_tabla + ' '+ 'where ' +@condicion + '' + 'order by ' + @condicion2 +'';
		
		exec sp_executesql @sql
	end 
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
	declare @i int = 0;
	set @condicion ='TotalDue > 2000 and TotalDue < 4000';
	set @condicion2 ='TotalDue';
	set  @nom_tabla='SalesOrderHeader';

	while @i<2
	begin
		set @i = @i+1;
		select @servidor = servidor, @nom_bd = bd from diccionario_dist where id_fragmento = @i;
		
		set @sql = 'select * from ' + @servidor + '.' + @nom_bd + '.Sales.'+ @nom_tabla + ' '+ 'where ' +@condicion + '' + 'order by ' + @condicion2 +'';
		
		exec sp_executesql @sql
	end 
end

exec ventas_2a4;
--16.	Listado de cambio de moneda de USD a MXN
/*select * from Sales.CurrencyRate where FromCurrencyCode = 'USD' and ToCurrencyCode = 'MXN';*/

alter procedure cambio_moneda as
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

	while @i<2
	begin
		set @i = @i+1;
		select @servidor = servidor, @nom_bd = bd from diccionario_dist where id_fragmento = @i;
		
		set @sql = 'select * from ' + @servidor + '.' + @nom_bd + '.Sales.'+ @nom_tabla + ' '+ 'where ' +@condicion + '' ;
		
		exec sp_executesql @sql
	end 
end

exec cambio_moneda;

