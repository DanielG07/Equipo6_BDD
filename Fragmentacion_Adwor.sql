
-- Fragmentacion de SalesOrderHeader
CREATE DATABASE SOH_NORTEAMERICA
USE SOH_NORTEAMERICA

-- Fragmento de SALESORDERHEADER Norteamerica
SELECT soh.* INTO SalesOrderHeader
FROM AdventureWorks2019.Sales.SalesOrderHeader soh
JOIN (SELECT * FROM AdventureWorks2019.Sales.SalesTerritory
WHERE [Group] = 'North America') st
ON soh.TerritoryID = st.TerritoryID

CREATE SCHEMA Sales;  
GO   
ALTER SCHEMA Sales TRANSFER OBJECT::dbo.SalesOrderHeader;  
GO 

ALTER TABLE Sales.SalesOrderHeader ADD CONSTRAINT pk_SalesOrderID_ID PRIMARY KEY (SalesOrderID)
ALTER TABLE Sales.SalesOrderHeader ADD FOREIGN KEY (CustomerID) REFERENCES AdventureWorks2019.Sales.Customer(CustomerID);
ALTER TABLE Sales.SalesOrderHeader ADD FOREIGN KEY (SalesPersonID) REFERENCES AdventureWorks2019.Sales.SalesPerson(BusinessEntityID);
ALTER TABLE Sales.SalesOrderHeader ADD FOREIGN KEY (TerritoryID) REFERENCES AdventureWorks2019.Sales.SalesTerritory(TerritoryID);
ALTER TABLE Sales.SalesOrderHeader ADD FOREIGN KEY (BillToAddressID) REFERENCES AdventureWorks2019.Person.Address(AddressID);
ALTER TABLE Sales.SalesOrderHeader ADD FOREIGN KEY (ShipToAddressID) REFERENCES AdventureWorks2019.Person.Address(AddressID);
ALTER TABLE Sales.SalesOrderHeader ADD FOREIGN KEY (ShipMethodID) REFERENCES AdventureWorks2019.Purchasing.ShipMethod(ShipMethodID);
ALTER TABLE Sales.SalesOrderHeader ADD FOREIGN KEY (CreditCardID) REFERENCES AdventureWorks2019.Sales.CreditCard(CreditCardID);
ALTER TABLE Sales.SalesOrderHeader ADD FOREIGN KEY (CurrencyRateID) REFERENCES AdventureWorks2019.Sales.CurrencyRate(CurrencyRateID);

CREATE DATABASE SOH_EUROPACIFICO
USE SOH_EUROPACIFICO

--Fragmento de SALESORDERHEADER Europa-Pacifico
SELECT soh.* INTO SalesOrderHeader
FROM AdventureWorks2019.Sales.SalesOrderHeader soh
JOIN (SELECT * FROM AdventureWorks2019.Sales.SalesTerritory
WHERE [Group] != 'North America') st
ON soh.TerritoryID = st.TerritoryID

CREATE SCHEMA Sales;  
GO   
ALTER SCHEMA Sales TRANSFER OBJECT::dbo.SalesOrderHeader;  
GO 

ALTER TABLE Sales.SalesOrderHeader ADD CONSTRAINT pk_SalesOrderID_ID PRIMARY KEY (SalesOrderID)
ALTER TABLE Sales.SalesOrderHeader ADD FOREIGN KEY (CustomerID) REFERENCES AdventureWorks2019.Sales.Customer(CustomerID);
ALTER TABLE Sales.SalesOrderHeader ADD FOREIGN KEY (SalesPersonID) REFERENCES AdventureWorks2019.Sales.SalesPerson(BusinessEntityID);
ALTER TABLE Sales.SalesOrderHeader ADD FOREIGN KEY (TerritoryID) REFERENCES AdventureWorks2019.Sales.SalesTerritory(TerritoryID);
ALTER TABLE Sales.SalesOrderHeader ADD FOREIGN KEY (BillToAddressID) REFERENCES AdventureWorks2019.Person.Address(AddressID);
ALTER TABLE Sales.SalesOrderHeader ADD FOREIGN KEY (ShipToAddressID) REFERENCES AdventureWorks2019.Person.Address(AddressID);
ALTER TABLE Sales.SalesOrderHeader ADD FOREIGN KEY (ShipMethodID) REFERENCES AdventureWorks2019.Purchasing.ShipMethod(ShipMethodID);
ALTER TABLE Sales.SalesOrderHeader ADD FOREIGN KEY (CreditCardID) REFERENCES AdventureWorks2019.Sales.CreditCard(CreditCardID);
ALTER TABLE Sales.SalesOrderHeader ADD FOREIGN KEY (CurrencyRateID) REFERENCES AdventureWorks2019.Sales.CurrencyRate(CurrencyRateID);

--Fragmentacion de SalesOrderDetail
CREATE DATABASE SOD_NORTEAMERICA
USE SOD_NORTEAMERICA

SELECT sod.* INTO SalesOrderDetail
FROM AdventureWorks2019.Sales.SalesOrderDetail sod
JOIN (SELECT * FROM SOH_NORTEAMERICA.Sales.SalesOrderHeader) st
ON sod.SalesOrderID = st.SalesOrderID

CREATE SCHEMA Sales;  
GO   
ALTER SCHEMA Sales TRANSFER OBJECT::dbo.SalesOrderDetail;  
GO 

ALTER TABLE Sales.SalesOrderDetail ADD CONSTRAINT pk_SalesOrderDetailID_ID PRIMARY KEY (SalesOrderDetailID)
ALTER TABLE Sales.SalesOrderDetail ADD CONSTRAINT pk_SalesOrderID_ID PRIMARY KEY (SalesOrderID)
ALTER TABLE Sales.SalesOrderDetail ADD FOREIGN KEY (SalesOrderID) REFERENCES AdventureWorks2019.Sales.SalesOrderHeader(SalesOrderID);
ALTER TABLE Sales.SalesOrderDetail ADD FOREIGN KEY (ProductID) REFERENCES AdventureWorks2019.Production.Product(ProductID);
ALTER TABLE Sales.SalesOrderDetail ADD FOREIGN KEY (SpecialOfferID) REFERENCES AdventureWorks2019.Sales.SpecialOfferProduct(SpecialOfferID);

CREATE DATABASE SOD_EUROPACIFICO
USE SOD_EUROPACIFICO

SELECT sod.* INTO SalesOrderDetail
FROM AdventureWorks2019.Sales.SalesOrderDetail sod
JOIN (SELECT * FROM SOH_EUROPACIFICO.Sales.SalesOrderHeader) st
ON sod.SalesOrderID = st.SalesOrderID

CREATE SCHEMA Sales;  
GO   
ALTER SCHEMA Sales TRANSFER OBJECT::dbo.SalesOrderDetail;  
GO 

ALTER TABLE Sales.SalesOrderDetail ADD CONSTRAINT pk_SalesOrderDetailID_ID PRIMARY KEY (SalesOrderDetailID)
ALTER TABLE Sales.SalesOrderDetail ADD CONSTRAINT pk_SalesOrderID_ID PRIMARY KEY (SalesOrderID)
ALTER TABLE Sales.SalesOrderDetail ADD FOREIGN KEY (SalesOrderID) REFERENCES AdventureWorks2019.Sales.SalesOrderHeader(SalesOrderID);
ALTER TABLE Sales.SalesOrderDetail ADD FOREIGN KEY (ProductID) REFERENCES AdventureWorks2019.Production.Product(ProductID);
ALTER TABLE Sales.SalesOrderDetail ADD FOREIGN KEY (SpecialOfferID) REFERENCES AdventureWorks2019.Sales.SpecialOfferProduct(SpecialOfferID);

--Fragmentacion de SalesOrderHeaderSalesReason
CREATE DATABASE SOHSR_NORTEAMERICA
USE SOHSR_NORTEAMERICA

SELECT sohsr.* INTO SalesOrderHeaderSalesReason
FROM AdventureWorks2019.Sales.SalesOrderHeaderSalesReason sohsr
JOIN (SELECT * FROM SOH_NORTEAMERICA.Sales.SalesOrderHeader) st
ON sohsr.SalesOrderID = st.SalesOrderID

CREATE SCHEMA Sales;  
GO   
ALTER SCHEMA Sales TRANSFER OBJECT::dbo.SalesOrderHeaderSalesReason;  
GO 

ALTER TABLE Sales.SalesOrderHeaderSalesReason ADD CONSTRAINT pk_SalesOrderID_ID PRIMARY KEY (SalesOrderID)
ALTER TABLE Sales.SalesOrderHeaderSalesReason ADD CONSTRAINT pk_SalesReasonID_ID PRIMARY KEY (SalesReasonID)
ALTER TABLE Sales.SalesOrderHeaderSalesReason ADD FOREIGN KEY (SalesOrderID) REFERENCES AdventureWorks2019.Sales.SalesOrderHeader(SalesOrderID);
ALTER TABLE Sales.SalesOrderHeaderSalesReason ADD FOREIGN KEY (SalesReasonID) REFERENCES AdventureWorks2019.Sales.SalesReason(SalesReasonID);

CREATE DATABASE SOHSR_EUROPACIFICO
USE SOHSR_EUROPACIFICO

SELECT sohsr.* INTO SalesOrderHeaderSalesReason
FROM AdventureWorks2019.Sales.SalesOrderHeaderSalesReason sohsr
JOIN (SELECT * FROM SOH_EUROPACIFICO.Sales.SalesOrderHeader) st
ON sohsr.SalesOrderID = st.SalesOrderID

CREATE SCHEMA Sales;  
GO   
ALTER SCHEMA Sales TRANSFER OBJECT::dbo.SalesOrderHeaderSalesReason;  
GO 

ALTER TABLE Sales.SalesOrderHeaderSalesReason ADD CONSTRAINT pk_SalesOrderID_ID PRIMARY KEY (SalesOrderID)
ALTER TABLE Sales.SalesOrderHeaderSalesReason ADD CONSTRAINT pk_SalesReasonID_ID PRIMARY KEY (SalesReasonID)
ALTER TABLE Sales.SalesOrderHeaderSalesReason ADD FOREIGN KEY (SalesOrderID) REFERENCES AdventureWorks2019.Sales.SalesOrderHeader(SalesOrderID);
ALTER TABLE Sales.SalesOrderHeaderSalesReason ADD FOREIGN KEY (SalesReasonID) REFERENCES AdventureWorks2019.Sales.SalesReason(SalesReasonID);