USE NORTEAMERICA;
---USE EUROPACIFICO;


/* DICCIONARIO DE FRAGMENTACIÓN */


-- Se debe almacenar en cada fragmento o en cada servidor

CREATE TABLE dicci_dist_proy (
  id_fragmento tinyint primary key, -- identificador del fragmento
  servidor varchar(100), -- nombre del servidor vinculado
  bd varchar(100), -- nombre de la base que aloja al fragmento
  --name_tabla varchar(100), -- nombre de la tabla que representa fragmento
  col_frag varchar(100) -- columna que se utiliza como criterio de fragmentación
)

/* CATALOGO */

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

select * from dicci_dist_proy


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

select * from val_col_frag