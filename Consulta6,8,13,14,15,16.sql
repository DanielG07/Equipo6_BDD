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
		select @servidor = servidor, @nom_bd = bd from diccionario_distri where id_fragmento = @i;
		
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
		select @servidor = servidor, @nom_bd = bd from diccionario_distri where id_fragmento = @i;
		
		set @sql = 'select '''+@servidor+''' as Territorio, SalesPersonID as "Representante de Ventas", sum(TotalDue) as "Total de Ventas" from ' + @servidor + '.' + @nom_bd + '.Sales.'+ @nom_tabla + ' '+  'group by ' + @condicion +'';
		
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
	declare @i int = 0;
	set  @nom_tabla='SalesOrderDetail';
	set  @nom_tabla2='SalesOrderHeader';

	while @i<2
	begin
		set @i = @i+1;
		select @servidor = servidor, @nom_bd = bd from diccionario_distri where id_fragmento = @i;



		set @sql = 'select Tabla2.TerritoryID as Territorio, Tabla1.ProductID, Tabla1.SpecialOfferID as Ofertas from ' + @servidor + '.' + @nom_bd + '.Sales.'+ @nom_tabla + ' ' +' as Tabla1 ' +' inner join '+ @servidor + '.' + @nom_bd + '.Sales.'+ @nom_tabla2 + ' ' +' as Tabla2 '+' on Tabla1.SalesOrderID = Tabla2.SalesOrderID '+ 'group by ' +'Tabla1.ProductID, Tabla2.TerritoryID, Tabla1.SpecialOfferID ' +'having Tabla2.TerritoryID = 5 and Tabla1.SpecialOfferID > 1 '+'' ;
		
		exec sp_executesql @sql
	end 
end

exec ofertas_terri5;
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

	select @servidor = servidor, @nom_bd = bd from diccionario_distri where bd='Resto'; 

		
			set @sql = 'Update ' + @servidor + '.' + @nom_bd + '.Sales.'+ @nom_tabla +' '+ 'set ' +@asignacion +' ' + 'where '+@condicion+'';

		exec sp_executesql @sql
	 
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

		select @servidor = servidor, @nom_bd = bd from diccionario_distri where bd='Resto';
		
		set @sql = 'select * from ' + @servidor + '.' + @nom_bd + '.Sales.'+ @nom_tabla + ' '+ 'where ' +@condicion + '' + 'order by ' + @condicion2 +'';
		
		exec sp_executesql @sql
	
end

exec cliente_1y3;
-- 15.	Listado de ventas con costo mayor a 2000 y menor a 4000
/*select * from Sales.SalesOrderHeader where TotalDue > 2000 and TotalDue < 4000
order by TotalDue asc;*/

create procedure ventas_2a4 as
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
		select @servidor = servidor, @nom_bd = bd from diccionario_distri where id_fragmento = @i;
		
		set @sql = 'select * from ' + @servidor + '.' + @nom_bd + '.Sales.'+ @nom_tabla + ' '+ 'where ' +@condicion + '' + 'order by ' + @condicion2 +'';
		
		exec sp_executesql @sql
	end 
end

exec ventas_2a4;
--16.	Listado de cambio de moneda de USD a MXN
/*select * from EuropeanServer.Resto.Sales.CurrencyRate where FromCurrencyCode = 'USD' and ToCurrencyCode = 'MXN';*/

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

		select @servidor = servidor, @nom_bd = bd from diccionario_distri where bd='Resto';
		
		set @sql = 'select * from ' + @servidor + '.' + @nom_bd + '.Sales.'+ @nom_tabla + ' '+ 'where ' +@condicion + '' ;
		exec sp_executesql @sql
		
end

exec cambio_moneda;
/*++++++++++++++++++ NOTA ++++++++++++++++++++++*/
/*La base de datos Resto es la base de datos de contiene el resto de tablas que no estan en NorteAmerica ni Europa-Pacifico*/
