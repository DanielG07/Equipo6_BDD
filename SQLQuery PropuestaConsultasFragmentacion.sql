-- PROPUESTA DE CONSULTAS PARA MODELO DE FRAGMENTACION DEL SEGMENTO VENTAS

-- Listar el numero de ventas por territorio
select TerritoryID, count(*) as 'Num. Ventas'
from Sales.SalesOrderHeader
group by TerritoryID
order by TerritoryID ASC

-- Listar el numero de ventas por tienda 
select SalesPersonID, count(*) as 'Num. Ventas' 
from Sales.SalesOrderHeader
group by SalesPersonID

-- Listar el total de clientes que pertenecen a cada territorio
select TerritoryID, count(*) as 'Total_CLientes' 
from Sales.Customer 
where PersonID is not null
group by TerritoryID
order by TerritoryID asc

-- Actualizar la oferta de llantas de monta�a con un descuento del 40%
update Sales.SpecialOffer
set DiscountPct = 0.40
where SpecialOfferID = 10

-- Listar las ordenes realizadas debidas a anuncio de revista
select * 
from Sales.SalesOrderHeaderSalesReason 
where SalesReasonID = 4

-- Listar el total de ordenes hechas por cada representante de ventas
select SalesPersonID, count(*) as 'Num. ordenes' 
from Sales.SalesOrderHeader 
group by SalesPersonID

-- Agregar el producto "HL Road Frame - Black, 58" a la oferta "Descuento por volumen 11 a 14"
insert into Sales.SpecialOfferProduct(SpecialOfferID,ProductID,rowguid,ModifiedDate) 
values (2,722,'asdfgh12345','2021-11-01 00:00:00.000') 

--La suma de total de venta por PersonID
select SalesPersonID, sum(TotalDue) as 'Total_Ventas'
from Sales.SalesOrderHeader 
group by SalesPersonID 
order by SalesPersonID asc

--Listar el producto más vendido por cada categoría 
DECLARE @i INT = 1;
WHILE @i <= 4
BEGIN
select top 1 *from (
			select ProductID,
			ProductCategoryID, 
			COUNT (ProductID) As Cantidad from(
				select 
				Categoria.ProductCategoryID, 
				Producto.ProductID FROM Sales.SalesOrderHeader			
				inner join Sales.SalesOrderDetail As Ventas ON 
				Ventas.SalesOrderID=Sales.SalesOrderHeader.SalesOrderID
				inner join Production.Product As Producto ON 
				Producto.ProductID=Ventas.ProductID
				inner join Production.ProductSubcategory As SubCategoria ON
				SubCategoria.ProductSubcategoryID=Producto.ProductSubcategoryID
				inner join Production.ProductCategory AS Categoria ON
				Categoria.ProductCategoryID=SubCategoria.ProductCategoryID
				WHERE Categoria.ProductCategoryID=@i) AS A
			 Group by ProductID, ProductCategoryID) AS B 
Order by Cantidad desc
SET @i = @i + 1;
END;  
--Listar los productos con ofertas en el territorio 5
SELECT  A.TerritoryID, B.ProductID, B.SpecialOfferID AS Oferta 
FROM Sales.SalesOrderDetail  AS B  
 	INNER JOIN Sales.SalesOrderHeader AS A ON B.SalesOrderID = A.SalesOrderID 
GROUP BY B.ProductID, A.TerritoryID, B.SpecialOfferID
HAVING A.TerritoryID = 5 AND B.SpecialOfferID > 1 
ORDER BY Oferta ASC 

--Listar los cinco productos más solicitados en cada uno de los territorios
DECLARE @i INT = 1;
WHILE @i <= 10
BEGIN
SELECT TOP 5 * FROM(
SELECT TerritoryID, ProductID, count(ProductID) AS cantidad FROM(
SELECT TerritoryID, ProductID FROM Sales.SalesOrderHeader
INNER JOIN Sales.SalesOrderDetail
ON Sales.SalesOrderDetail.SalesOrderID = Sales.SalesOrderHeader.SalesOrderID
WHERE TerritoryID = @i) AS A
GROUP BY ProductID, TerritoryID ) AS B ORDER BY cantidad DESC
SET @i = @i + 1;
END;


--Listar el producto menos solicitado por cada territorio 
DECLARE @i INT = 1;
WHILE @i <= 10
BEGIN
select top 1 *from (
			select 
			ProductID,
			TerritoryID, 
			COUNT (ProductID) As Cantidad from(
				select 
				Territorio.TerritoryID, 
				Producto.ProductID FROM Sales.SalesOrderHeader
			
				inner join Sales.SalesOrderDetail As Ventas ON 
				Ventas.SalesOrderID=Sales.SalesOrderHeader.SalesOrderID
				inner join Production.Product As Producto ON 
				Producto.ProductID=Ventas.ProductID
				inner join Sales.SalesOrderHeader AS VentasB ON
				Ventas.SalesOrderID=VentasB.SalesOrderID
				INNER JOIN Sales.SalesTerritory as Territorio ON
				VentasB.TerritoryID=Territorio.TerritoryID
				WHERE Territorio.TerritoryID=@i) AS A
			 Group by ProductID, TerritoryID) AS B 
Order by Cantidad ASC
SET @i = @i + 1;
END;  
-- Actualizar nombre de tarjeta de credito de credito SuperiorCard a SCard
update Sales.CreditCard
set CardType = 'SCard'
where CardType = 'SuperiorCard';

-- Listado de registros donde el ID de territorio de clientes es 1 y 3
select *
from Sales.Customer
where TerritoryID in (1,3)
order by TerritoryID asc;

-- Listado de ventas con costo mayor a 2000 y menor a 4000
select *
from Sales.SalesOrderHeader
where TotalDue > 2000 and TotalDue < 4000
order by TotalDue asc;

-- Listado de cambio de moneda de USD a MXN
select *
from Sales.CurrencyRate
where FromCurrencyCode = 'USD' and ToCurrencyCode = 'MXN';
