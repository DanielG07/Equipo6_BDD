-- Consulta 1 - Segmentos
--Listar las ordenes que utilizan el método de envio 'CARGO TRANSPORT 5' con su tarifa de envio

create procedure listar_ordenes_por_metodo @oferta nvarchar(5) as
begin

	declare @servidor nvarchar(100);
	declare @sql nvarchar(1000);
	declare @region nvarchar(100);
	declare @region1 nvarchar(100);

	select @region1 = 'AdventureWorks2019'
	select @servidor = servidor
	from dicci_dist_proy
	where bd = @region1

	select @region = bd
	from dicci_dist_proy
	where servidor = @servidor and bd not in (@region1)

	set @sql = 'select t1.SalesOrderID, t1.ShipDate, t1.ShipToAddressID, t1.ShipMethodID, t2.Name, t2.ShipRate
				from ['+@servidor+'].['+@region+'].Sales.SalesOrderHeader t1
				inner join ['+@servidor+'].['+@region1+'].Purchasing.ShipMethod t2
				on t1.ShipMethodID = t2.ShipMethodID
				where t2.ShipMethodID = '+@oferta 

	exec sp_executesql @sql
end

exec listar_ordenes_por_metodo '5'


-- Consulta 2 - Segmentos
--Listar los datos de los 5 representantes de ventas con mayor numero de ordenes realizadas 

create procedure listar_5_representantes as
begin

	declare @servidor nvarchar(100);
	declare @sql nvarchar(1000);
	declare @region nvarchar(100);
	declare @region1 nvarchar(100);

	select @region1 = 'AdventureWorks2019'
	select @servidor = servidor
	from dicci_dist_proy
	where bd = @region1

	select @region = bd
	from dicci_dist_proy
	where servidor = @servidor and bd not in (@region1)

	set @sql = 'select top 5 * from
				(select t1.BusinessEntityID, t1.NationalIDNumber, t1.LoginID, t1.HireDate, t2.SalesQuota, t2.SalesLastYear, t2.CommissionPct
				from openquery('+@servidor+', ''select * from ['+@region1+'].HumanResources.Employee'') t1
				inner join ['+@servidor+'].['+@region1+'].Sales.SalesPerson t2
				on t1.BusinessEntityID = t2.BusinessEntityID
				where t1.JobTitle = ''Sales Representative'') a1
				inner join
				(select SalesPersonID, sum(TotalDue) as ''Total_Sale''
				from ['+@servidor+'].['+@region+'].Sales.SalesOrderHeader
				where SalesPersonID is not null
				group by SalesPersonID) a2
				on a1.BusinessEntityID = a2.SalesPersonID
				order by Total_Sale desc'

	exec sp_executesql @sql
end

exec listar_5_representantes

-- Consulta 3 - Segmentos
-- Listar los 5 productos diferentes mas vendidos por cantidad - historial global

create procedure listar_5_productos_mas_vendidos as
begin

	declare @servidor nvarchar(100);
	declare @sql nvarchar(1000);
	declare @region nvarchar(100);
	declare @region1 nvarchar(100);

	select @region1 = 'AdventureWorks2019'
	select @servidor = servidor
	from dicci_dist_proy
	where bd = @region1

	select @region = bd
	from dicci_dist_proy
	where servidor = @servidor and bd not in (@region1)

	set @sql = 'select top 5 p.Name, sum(sod.OrderQty) as Total
				from ['+@servidor+'].['+@region1+'].Production.Product p
				inner join ['+@servidor+'].['+@region+'].Sales.SalesOrderDetail sod on sod.ProductID = p.ProductID
				group by p.Name
				order by 2 desc'

	exec sp_executesql @sql
end

exec listar_5_productos_mas_vendidos

-- Consulta 4 - Segmentos
-- Listar el producto que tiene el precio de venta más caro que esté en oferta especial

create procedure listar_producto_mas_caro_oferta as
begin

	declare @servidor nvarchar(100);
	declare @sql nvarchar(1000);
	declare @region nvarchar(100);
	

	select @region = 'AdventureWorks2019'
	select @servidor = servidor
	from dicci_dist_proy
	where bd = @region

	set @sql = 'select P1.ProductID, P1."Name",ListPrice as Price
				from ['+@servidor+'].['+@region+'].Production.Product P1
				join ['+@servidor+'].['+@region+'].Sales.SpecialOfferProduct P2 ON P1.ProductID= P2.ProductID
				where ListPrice = (select max(ListPrice ) MaxPrice from ['+@servidor+'].['+@region+'].Production.Product)'

	exec sp_executesql @sql
end

exec listar_producto_mas_caro_oferta