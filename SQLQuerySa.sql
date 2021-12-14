 
CREATE DATABASE EUROPACIFICO
USE EUROPACIFICO

--Fragmento de SALESORDERHEADER Europa-Pacifico
SELECT soh.* INTO SalesOrderHeader
FROM AdventureWorks2017.Sales.SalesOrderHeader soh
JOIN (SELECT * FROM AdventureWorks2017.Sales.SalesTerritory
WHERE [Group] != 'North America') st
ON soh.TerritoryID = st.TerritoryID

CREATE SCHEMA Sales;  
GO   
ALTER SCHEMA Sales TRANSFER OBJECT::dbo.SalesOrderHeader;  
GO 

ALTER TABLE Sales.SalesOrderHeader ADD CONSTRAINT pk_SalesOrderID_ID PRIMARY KEY (SalesOrderID)
--ALTER TABLE Sales.SalesOrderHeader ADD FOREIGN KEY (CustomerID) REFERENCES AdventureWorks2019.Sales.Customer(CustomerID);
GO
CREATE TRIGGER tr_soh_sce ON Sales.SalesOrderHeader
FOR INSERT
AS
if not exists(SELECT * FROM inserted i
              JOIN LSERVER2.AdventureWorks2017.Sales.Customer c
			  ON i.CustomerID = c.CustomerID)
ROLLBACK

--ALTER TABLE Sales.SalesOrderHeader ADD FOREIGN KEY (SalesPersonID) REFERENCES AdventureWorks2019.Sales.SalesPerson(BusinessEntityID);
GO
CREATE TRIGGER tr_soh_sspe ON Sales.SalesOrderHeader
FOR INSERT
AS
if not exists(SELECT * FROM inserted i
              JOIN LSERVER2.AdventureWorks2017.Sales.SalesPerson s
			  ON i.SalesOrderID = s.BusinessEntityID)
ROLLBACK

--ALTER TABLE Sales.SalesOrderHeader ADD FOREIGN KEY (TerritoryID) REFERENCES AdventureWorks2019.Sales.SalesTerritory(TerritoryID);
GO
CREATE TRIGGER tr_soh_stte ON Sales.SalesOrderHeader
FOR INSERT
AS
if not exists(SELECT * FROM inserted i
              JOIN LSERVER2.AdventureWorks2017.Sales.SalesTerritory t
			  ON i.TerritoryID = t.TerritoryID)
ROLLBACK

--ALTER TABLE Sales.SalesOrderHeader ADD FOREIGN KEY (BillToAddressID) REFERENCES AdventureWorks2019.Person.Address(AddressID);
--ALTER TABLE Sales.SalesOrderHeader ADD FOREIGN KEY (ShipToAddressID) REFERENCES AdventureWorks2019.Person.Address(AddressID);
GO
CREATE TRIGGER tr_soh_pae ON Sales.SalesOrderHeader
FOR INSERT
AS
if not exists(SELECT * FROM inserted i 
              JOIN (SELECT * FROM OPENQUERY (LSERVER2, 'SELECT * FROM
              AdventureWorks2019.Person.Address')) a
			  ON i.BillToAddressID = a.AddressID
			  AND i.ShipToAddressID = a.AddressID)
ROLLBACK

--ALTER TABLE Sales.SalesOrderHeader ADD FOREIGN KEY (ShipMethodID) REFERENCES AdventureWorks2019.Purchasing.ShipMethod(ShipMethodID);
GO
CREATE TRIGGER tr_soh_psme ON Sales.SalesOrderHeader
FOR INSERT
AS
if not exists(SELECT * FROM inserted i
              JOIN LSERVER2.AdventureWorks2017.Purchasing.ShipMethod ps
			  ON i.ShipMethodID = ps.ShipMethodID)
ROLLBACK

--ALTER TABLE Sales.SalesOrderHeader ADD FOREIGN KEY (CreditCardID) REFERENCES AdventureWorks2019.Sales.CreditCard(CreditCardID);
GO
CREATE TRIGGER tr_soh_scce ON Sales.SalesOrderHeader
FOR INSERT
AS
if not exists(SELECT * FROM inserted i
              JOIN LSERVER2.AdventureWorks2017.Sales.CreditCard cd
			  ON i.CreditCardID = cd.CreditCardID)
ROLLBACK

--ALTER TABLE Sales.SalesOrderHeader ADD FOREIGN KEY (CurrencyRateID) REFERENCES AdventureWorks2019.Sales.CurrencyRate(CurrencyRateID);
GO
CREATE TRIGGER tr_soh_scre ON Sales.SalesOrderHeader
FOR INSERT
AS
if not exists(SELECT * FROM inserted i
              JOIN LSERVER2.AdventureWorks2017.Sales.CurrencyRate cr
			  ON i.CurrencyRateID = cr.CurrencyRateID)
ROLLBACK

--Fragmentacion de SalesOrderDetail 
SELECT sod.* INTO SalesOrderDetail
FROM AdventureWorks2017.Sales.SalesOrderDetail sod
JOIN (SELECT * FROM EUROPACIFICO.Sales.SalesOrderHeader) st
ON sod.SalesOrderID = st.SalesOrderID
 
ALTER SCHEMA Sales TRANSFER OBJECT::dbo.SalesOrderDetail;  
GO 

ALTER TABLE Sales.SalesOrderDetail ADD CONSTRAINT pk_SalesOrderDetailID_ID PRIMARY KEY (SalesOrderDetailID, SalesOrderID)
--ALTER TABLE Sales.SalesOrderDetail ADD CONSTRAINT pk_SalesOrderID_ID PRIMARY KEY (SalesOrderID)
--ALTER TABLE Sales.SalesOrderDetail ADD FOREIGN KEY (SalesOrderID) REFERENCES Sales.SalesOrderHeader(SalesOrderID);
GO
CREATE TRIGGER tr_sod_sohe ON Sales.SalesOrderDetail
FOR INSERT
AS
if not exists(SELECT * FROM inserted i
              JOIN Sales.SalesOrderHeader soh
			  ON i.SalesOrderID = soh.SalesOrderID)
ROLLBACK

--ALTER TABLE Sales.SalesOrderDetail ADD FOREIGN KEY (ProductID) REFERENCES AdventureWorks2019.Production.Product(ProductID);
GO
CREATE TRIGGER tr_sod_ppe ON Sales.SalesOrderDetail
FOR INSERT
AS
if not exists(SELECT * FROM inserted i
              JOIN LSERVER2.AdventureWorks2017.Production.Product p
			  ON i.ProductID = p.ProductID)
ROLLBACK

--ALTER TABLE Sales.SalesOrderDetail ADD FOREIGN KEY (SpecialOfferID) REFERENCES AdventureWorks2019.Sales.SpecialOfferProduct(SpecialOfferID);
GO
CREATE TRIGGER tr_sod_sope ON Sales.SalesOrderDetail
FOR INSERT
AS
if not exists(SELECT * FROM inserted i
              JOIN LSERVER2.AdventureWorks2017.Sales.SpecialOfferProduct so
			  ON i.SpecialOfferID = so.SpecialOfferID)
ROLLBACK

--Fragmentacion de SalesOrderHeaderSalesReason
SELECT sohsr.* INTO SalesOrderHeaderSalesReason
FROM AdventureWorks2017.Sales.SalesOrderHeaderSalesReason sohsr
JOIN (SELECT * FROM EUROPACIFICO.Sales.SalesOrderHeader) st
ON sohsr.SalesOrderID = st.SalesOrderID
  
ALTER SCHEMA Sales TRANSFER OBJECT::dbo.SalesOrderHeaderSalesReason;  
GO 

ALTER TABLE Sales.SalesOrderHeaderSalesReason ADD CONSTRAINT pk_SalesOrderIDSRI_ID PRIMARY KEY (SalesOrderID, SalesReasonID)
--ALTER TABLE Sales.SalesOrderHeaderSalesReason ADD CONSTRAINT pk_SalesReasonID_ID PRIMARY KEY (SalesReasonID)
--ALTER TABLE Sales.SalesOrderHeaderSalesReason ADD FOREIGN KEY (SalesOrderID) REFERENCES Sales.SalesOrderHeader(SalesOrderID);
GO
CREATE TRIGGER tr_sohsr_sohe ON Sales.SalesOrderHeaderSalesReason
FOR INSERT
AS
if not exists(SELECT * FROM inserted i
              JOIN Sales.SalesOrderHeader soh
			  ON i.SalesOrderID = soh.SalesOrderID)
ROLLBACK

--ALTER TABLE Sales.SalesOrderHeaderSalesReason ADD FOREIGN KEY (SalesReasonID) REFERENCES AdventureWorks2019.Sales.SalesReason(SalesReasonID);
GO
CREATE TRIGGER tr_sohsr_sre ON Sales.SalesOrderHeaderSalesReason
FOR INSERT
AS
if not exists(SELECT * FROM inserted i
              JOIN LSERVER2.AdventureWorks2017.Sales.SalesReason sri
			  ON i.SalesReasonID = sri.SalesReasonID)
ROLLBACK