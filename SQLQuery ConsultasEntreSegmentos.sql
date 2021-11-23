-------------------------------------------------------------------------------------------------------

----------------------------------- CONSULTAS ENTRE SEGMENTOS ------------------------------------------

-------------------------------------------------------------------------------------------------------

--Listar las ordenes que utilizan el m�todo de envio 'CARGO TRANSPORT 5' con su tarifa de envio

select t1.SalesOrderID, t1.ShipDate, t1.ShipToAddressID, t1.ShipMethodID, t2.Name, t2.ShipRate
from Sales.SalesOrderHeader t1
inner join Purchasing.ShipMethod t2
on t1.ShipMethodID = t2.ShipMethodID
where t2.Name = 'CARGO TRANSPORT 5'

--Listar los datos de los 5 representantes de ventas con mayor numero de ordenes realizadas 

select top 5 * from
(select t1.BusinessEntityID, t1.NationalIDNumber, t1.LoginID, t1.HireDate, t2.SalesQuota, t2.SalesLastYear, t2.CommissionPct
from HumanResources.Employee t1
inner join Sales.SalesPerson t2
on t1.BusinessEntityID = t2.BusinessEntityID
where t1.JobTitle = 'Sales Representative') a1
inner join
(select SalesPersonID, sum(TotalDue) as 'Total_Sale'
from Sales.SalesOrderHeader 
where SalesPersonID is not null
group by SalesPersonID) a2
on a1.BusinessEntityID = a2.SalesPersonID
order by Total_Sale desc