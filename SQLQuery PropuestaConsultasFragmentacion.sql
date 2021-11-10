-- PROPUESTA DE CONSULTAS PARA MODELO DE FRAGMENTACION DEL SEGMENTO VENTAS

-- Listar el numero de ventas por territorio
-- Listar el numero de ventas por tienda 
-- Listar el total de clientes que pertenecen a cada territorio
-- Actualizar la oferta de llantas de monta�a con un descuento del 40%
-- Listar las ordenes realizadas debidas a anuncio de revista
-- Listar el total de ordenes hechas por cada representante de ventas
-- Agregar el producto "HL Road Frame - Black, 58" a la oferta "Descuento por volumen 11 a 14"
--La suma de total de venta por PersonID
--Tienda con mas ventas realizadas por tarjeta de credito
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
