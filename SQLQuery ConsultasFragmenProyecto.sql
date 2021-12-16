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

alter procedure numero_ventas_tienda_listar @tienda nvarchar (100) as
begin
	declare @territorio nvarchar(100);
	declare @servidor nvarchar(100);
	declare @sql nvarchar(1000);
	declare @region nvarchar(100);
	declare @Parametros nvarchar(500);
	declare @servidor2 nvarchar(100);
	declare @region2 nvarchar(100);

	--select @servidor = @@SERVERNAME
	select @servidor = 'LSERVER2'
	
	select @region = bd
	from dicci_dist_proy
	where servidor = @servidor

	--select @servidor
	--select @region

	select @sql = N'select @territorioOUT = TerritoryID
				from ['+@servidor+'].['+@region+'].Sales.Customer
				where StoreID =' +@tienda

	set @Parametros = N'@territorioOUT nvarchar (100) OUTPUT'

	exec sp_executesql @sql, @Parametros, @territorioOUT=@territorio OUTPUT

	if (isnull(@territorio,0) = 0)
	begin
		--select 'null'
		select @servidor = servidor, @region = bd
		from dicci_dist_proy
		where servidor != @servidor;

		--select @servidor
		--select @region

		exec sp_executesql @sql, @Parametros, @territorioOUT=@territorio OUTPUT

		--select @territorio

		if (isnull(@territorio,0) = 0)
		begin
			select 'Error: Territorio no encontrado'
		end
		else
		begin
			 --select 'no null'

			 select @servidor2 = servidor, @region2 = bd
			 from dicci_dist_proy where id_fragmento in (select id_fragmento from val_col_frag where val_col = @territorio);

			 set @sql =  'select st.Name as ''Territorio'', count(*) as ''Ventas'' 
					from [' + @servidor2 + '].' + @region2 + '.Sales.SalesOrderHeader soh 
					inner join [' + @servidor + '].' + @region + '.Sales.SalesTerritory st on st.TerritoryID = soh.TerritoryID
					where soh.TerritoryID = ' + @territorio +
					'group by st.Name';


			exec sp_executesql @sql
		end
	end
	else
	begin
		 --select 'no null'

		 select @servidor2 = servidor, @region2 = bd
			 from dicci_dist_proy where id_fragmento in (select id_fragmento from val_col_frag where val_col = @territorio);

		 set @sql =  'select st.Name as ''Territorio'', count(*) as ''Ventas'' 
				from [' + @servidor2 + '].' + @region2 + '.Sales.SalesOrderHeader soh 
				inner join [' + @servidor + '].' + @region + '.Sales.SalesTerritory st on st.TerritoryID = soh.TerritoryID
				where soh.TerritoryID = ' + @territorio +
				'group by st.Name';

		exec sp_executesql @sql
	end
end

exec numero_ventas_tienda_listar '934'
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

	set @sql =  'select st.Name as ''Territorio'', count(*) as ''Total_Clientes'' 
				from [' + @servidor + '].' + @region + '.Sales.Customer sc 
				inner join [' + @servidor + '].' + @region + '.Sales.SalesTerritory st on st.TerritoryID = sc.TerritoryID
				where sc.TerritoryID = ' + @territorio + ' and PersonID is not null
				group by st.Name';

	exec sp_executesql @sql
end

exec numero_clientes_listar '6'
exec numero_clientes_listar '9'

-- Consulta 4
-- Actualizar la oferta de llantas de montaña con un descuento del 40%
create procedure actualizar_descuento_producto @producto nvarchar(5), @ofertaNueva nvarchar(5) as
begin
	declare @servidor nvarchar(100);
	declare @sql nvarchar(1000);
	declare @region nvarchar(100);

	select @region = 'AdventureWorks2019'
	select @servidor = servidor
	from dicci_dist_proy
	where bd = @region

	set @sql = 'update ['+@servidor+'].['+@region+'].Sales.SpecialOffer
				set DiscountPct = '+@ofertaNueva+', ModifiedDate = getdate()
				 where SpecialOfferID = '+@producto 
	
	exec sp_executesql @sql

	set @sql = 'select *
				from ['+@servidor+'].['+@region+'].Sales.SpecialOffer
				where SpecialOfferID = '+@producto 
	
	exec sp_executesql @sql
end

exec actualizar_descuento_producto '10', '0.40'

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
use EUROPACIFICO
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

	DECLARE @VAR TABLE (
		Representante_Ventas int,
		Total_Ordenes int);

	while @i<4
	begin
		--set @i = @i+1;
		select @servidor = servidor, @nom_bd = bd from dicci_dist_proy where id_fragmento = @i;
		
		set @sql = 'select SalesPersonID as "Representante de Ventas", count(*) as "Ordenes" from ' + @servidor + '.' + @nom_bd + '.Sales.'+ @nom_tabla + ' '+  'group by ' + @condicion +'';
		
		set @i = @i+2

		--exec sp_executesql @sql
		insert into @VAR exec sys.sp_executesql @sql
	end
	Select * from @VAR
end

exec ordenes_rventas;
-- Consulta 7
-- Agregar el producto "HL Road Frame - Black, 58" a la oferta "Descuento por volumen 11 a 14"

create procedure actualizar_oferta_producto @producto nvarchar(5), @oferta nvarchar(5) as
begin

	declare @servidor nvarchar(100);
	declare @sql nvarchar(1000);
	declare @region nvarchar(100);

	select @region = 'AdventureWorks2019'
	select @servidor = servidor
	from dicci_dist_proy
	where bd = @region

	set @sql = 'insert into ['+@servidor+'].['+@region+'].Sales.SpecialOfferProduct(SpecialOfferID, ProductID, rowguid, ModifiedDate)
				values('+@producto+', '+@oferta+',newid(), getdate())' 

	exec sp_executesql @sql

	set @sql = 'select *
				from ['+@servidor+'].['+@region+'].Sales.SpecialOfferProduct
				where SpecialOfferID = '+@producto+' and ProductID = '+@oferta

		exec sp_executesql @sql

end

exec actualizar_oferta_producto '2', '680'

-- 8.	La suma de total de venta por PersonID
/*select SalesPersonID as 'Representante de Ventas', sum(TotalDue) as 'Total de Ventas' from Sales.SalesOrderHeader 
group by SalesPersonID */

create procedure ventas_person as
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

	DECLARE @VAR TABLE (
		Territorio varchar(50),
		Representante_Ventas int,
		Total_Ventas money);

	while @i<4
	begin
		--set @i = @i+1;
		select @servidor = servidor, @nom_bd = bd from dicci_dist_proy where id_fragmento = @i;
		
		set @sql = 'select '''+@nom_bd+''' as Territorio, SalesPersonID as "Representante de Ventas", sum(TotalDue) as "Total de Ventas" from ' + @servidor + '.' + @nom_bd + '.Sales.'+ @nom_tabla + ' '+  'group by ' + @condicion +'';
		
		set @i = @i+2

		--exec sp_executesql @sql
		insert into @VAR exec sys.sp_executesql @sql
	end 
	Select * from @VAR
end

exec ventas_person;

-- 9.   Listar el producto mas vendido por cada categoria
/*Select * from LSERVER2.AdventureWorks2019.Production.ProductCategory
Select top 1 ProductID, count(ProductID) as Total_ordenes from Sales.SalesOrderDetail
where ProductID in
(Select ProductID from
(Select tb1.*,tb2.SalesOrderID from
(Select pr.ProductID, sc.ProductCategoryID from LSERVER2.AdventureWorks2019.Production.Product pr
inner join LSERVER2.AdventureWorks2019.Production.ProductSubcategory sc
on pr.ProductSubcategoryID = sc.ProductSubcategoryID) tb1 
inner join Sales.SalesOrderDetail tb2
on tb1.ProductID = tb2.ProductID) fn
where ProductCategoryID = 4)
group by ProductID
order by Total_ordenes desc
select Name from LSERVER2.AdventureWorks2019.Production.Product where ProductID = 870*/

create procedure productomasvendido @categoria nvarchar(10) as
begin
	declare @servidor nvarchar(100);
	--declare @nom_bd nvarchar(100);
	declare @nom_tabla nvarchar(100);
	declare @sql nvarchar(1000);
	declare @sql2 nvarchar(1000);
	declare @condicion varchar(200);
	declare @nom_b nvarchar(100);
	declare @i int;
	set  @nom_tabla='SalesOrderDetail';
	set  @nom_b='AdventureWorks2019';

	DECLARE @VAR TABLE (
		ProductoID int,
		Total_Ordenes int);

   DECLARE @NOM TABLE (
        ProductoID int,
		Nombre nvarchar(100));

    --set @i = Cast(@categoria as int)

	if @categoria != '1' and @categoria != '2' and @categoria != '3' and @categoria != '4'
	begin
	   Select 'Error. Categoria no valida'
	end
	else
	begin
	--select @nom_bd = db_name();
	select @servidor = servidor from dicci_dist_proy where bd = @nom_b;


    set @sql = 	'Select top 1 ProductID, count(ProductID) as Total_ordenes from Sales.'+@nom_tabla+'
				where ProductID in
				(Select ProductID from
				(Select tb1.*,tb2.SalesOrderID from
				(Select pr.ProductID, sc.ProductCategoryID from '+@servidor+'.'+@nom_b+'.Production.Product pr
				inner join '+@servidor+'.'+@nom_b+'.Production.ProductSubcategory sc
				on pr.ProductSubcategoryID = sc.ProductSubcategoryID) tb1 
				inner join Sales.'+@nom_tabla+' tb2
				on tb1.ProductID = tb2.ProductID) fn
				where ProductCategoryID = '+@categoria+')
				group by ProductID
				order by Total_ordenes desc';

	set @sql2 = 'select ProductID, Name from '+@servidor+'.'+@nom_b+'.Production.Product';

	insert into @VAR exec sys.sp_executesql @sql
	insert into @NOM exec sys.sp_executesql @sql2

	Select vr.ProductoID, nm.Nombre, vr.Total_Ordenes from @VAR vr
	inner join @NOM nm
	on vr.ProductoID = nm.ProductoID
	end

end

exec productomasvendido '4';

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

	--while @i<4
	--begin
		--set @i = @i+1;
		select @servidor = servidor, @nom_bd = bd from dicci_dist_proy
		where id_fragmento = (select id_fragmento from val_col_frag where val_col = 5)


		set @sql = 'select Tabla2.TerritoryID as Territorio, Tabla1.ProductID, Tabla1.SpecialOfferID as Ofertas from ' + @servidor + '.' + @nom_bd + '.Sales.'+ @nom_tabla + ' ' +' as Tabla1 ' +' inner join '+ @servidor + '.' + @nom_bd + '.Sales.'+ @nom_tabla2 + ' ' +' as Tabla2 '+' on Tabla1.SalesOrderID = Tabla2.SalesOrderID '+ 'group by ' +'Tabla1.ProductID, Tabla2.TerritoryID, Tabla1.SpecialOfferID ' +'having Tabla2.TerritoryID = 5 and Tabla1.SpecialOfferID > 1 '+'' ;
		
		--set @i = @i+2

		exec sp_executesql @sql
	--end 
end

exec ofertas_terri5;

-- 11.  Listar los cinco productos mas solicitados en cada uno de los territorios

/*select top 5 sod.ProductID, count(ProductID) as Total_compras from Sales.SalesOrderDetail sod
inner join Sales.SalesOrderHeader soh
on sod.SalesOrderID = soh.SalesOrderID
where TerritoryID = 2
group by ProductID
order by Total_compras desc*/

create procedure productos_massolicitados @territorio nvarchar(10) as
begin
	declare @servidor nvarchar(100);
	declare @servidor2 nvarchar(100);
	--declare @nom_bd nvarchar(100);
	declare @nom_tabla nvarchar(100);
	declare @nom_tabla2 nvarchar(100);
	declare @sql nvarchar(1000);
	declare @sql2 nvarchar(1000);
	declare @condicion varchar(200);
	declare @nom_b nvarchar(100);
	declare @nom_b2 nvarchar(100);
	declare @nom_bd nvarchar(100);
	declare @i int;
	declare @i2 int;
	declare @i3 int;
	declare @i4 int;
	set  @nom_tabla='SalesOrderDetail';
	set  @nom_tabla2='SalesOrderHeader';
	set  @nom_b='AdventureWorks2019';

	DECLARE @VAR TABLE (
		ProductoID int,
		Total_Compras int);

   DECLARE @NOM TABLE (
        ProductoID int,
		Nombre nvarchar(100));

	DECLARE @numeros TABLE (
		idfragmento int,
		id_territorio int);

    --set @i = Cast(@categoria as int)
	if @territorio <= 10
	begin
    select @nom_bd = db_name();
    insert into @numeros select id_fragmento ,CAST(val_col as int) from val_col_frag
	select @i = max(id_territorio), @i2 = min(id_territorio) from @numeros where idfragmento = (select id_fragmento from dicci_dist_proy where bd = @nom_bd)
	select @i3 = max(id_territorio), @i4 = min(id_territorio) from @numeros where idfragmento = (select id_fragmento from dicci_dist_proy where bd != @nom_bd and id_fragmento != 2)
	
	if @territorio >= @i2 and @territorio <= @i --!= '1' and @territorio != '2' and @territorio != '3' and @territorio != '4'
	begin
	   select @servidor = servidor from dicci_dist_proy where bd = @nom_b;


    set @sql = 	'select top 5 sod.ProductID, count(ProductID) as Total_compras from Sales.'+@nom_tabla+' sod
				inner join Sales.'+@nom_tabla2+' soh
				on sod.SalesOrderID = soh.SalesOrderID
				where TerritoryID = '+@territorio+'
				group by ProductID
				order by Total_compras desc'

	set @sql2 = 'select ProductID, Name from '+@servidor+'.'+@nom_b+'.Production.Product';

	end

	if @territorio >= @i4 and @territorio <= @i3 
	begin
	select @servidor = servidor from dicci_dist_proy where bd = @nom_b;
	select @servidor2 = servidor, @nom_b2 = bd from dicci_dist_proy where bd != @nom_bd and id_fragmento != 2

    set @sql = 	'select top 5 sod.ProductID, count(ProductID) as Total_compras from '+@servidor2+'.'+@nom_b2+'.Sales.'+@nom_tabla+' sod
				inner join '+@servidor2+'.'+@nom_b2+'.Sales.'+@nom_tabla2+' soh
				on sod.SalesOrderID = soh.SalesOrderID
				where TerritoryID = '+@territorio+'
				group by ProductID
				order by Total_compras desc'

	set @sql2 = 'select ProductID, Name from '+@servidor+'.'+@nom_b+'.Production.Product';

	end
	end
	else
	begin
	--select @nom_bd = db_name();
	select 'Error. Territorio no valido'
	end

	insert into @VAR exec sys.sp_executesql @sql
	insert into @NOM exec sys.sp_executesql @sql2

	Select vr.ProductoID, nm.Nombre, vr.Total_Compras from @VAR vr
	inner join @NOM nm
	on vr.ProductoID = nm.ProductoID

end

exec productos_massolicitados '9';

-- 12.  Listar el producto menos solicitado por cada territorio

/*select top 5 sod.ProductID, count(ProductID) as Total_compras from Sales.SalesOrderDetail sod
inner join Sales.SalesOrderHeader soh
on sod.SalesOrderID = soh.SalesOrderID
where TerritoryID = 2
group by ProductID
order by Total_compras asc*/


create procedure productos_menossolicitados @territorio nvarchar(10) as
begin
	declare @servidor nvarchar(100);
	declare @servidor2 nvarchar(100);
	--declare @nom_bd nvarchar(100);
	declare @nom_tabla nvarchar(100);
	declare @nom_tabla2 nvarchar(100);
	declare @sql nvarchar(1000);
	declare @sql2 nvarchar(1000);
	declare @condicion varchar(200);
	declare @nom_b nvarchar(100);
	declare @nom_b2 nvarchar(100);
	declare @nom_bd nvarchar(100);
	declare @i int;
	declare @i2 int;
	declare @i3 int;
	declare @i4 int;
	set  @nom_tabla='SalesOrderDetail';
	set  @nom_tabla2='SalesOrderHeader';
	set  @nom_b='AdventureWorks2019';

	DECLARE @VAR TABLE (
		ProductoID int,
		Total_Compras int);

   DECLARE @NOM TABLE (
        ProductoID int,
		Nombre nvarchar(100));

	DECLARE @numeros TABLE (
		idfragmento int,
		id_territorio int);

    --set @i = Cast(@categoria as int)
	if @territorio <= 10
	begin
    select @nom_bd = db_name();
    insert into @numeros select id_fragmento ,CAST(val_col as int) from val_col_frag
	select @i = max(id_territorio), @i2 = min(id_territorio) from @numeros where idfragmento = (select id_fragmento from dicci_dist_proy where bd = @nom_bd)
	select @i3 = max(id_territorio), @i4 = min(id_territorio) from @numeros where idfragmento = (select id_fragmento from dicci_dist_proy where bd != @nom_bd and id_fragmento != 2)
	
	if @territorio >= @i2 and @territorio <= @i --!= '1' and @territorio != '2' and @territorio != '3' and @territorio != '4'
	begin
	   select @servidor = servidor from dicci_dist_proy where bd = @nom_b;


    set @sql = 	'select top 1 sod.ProductID, count(ProductID) as Total_compras from Sales.'+@nom_tabla+' sod
				inner join Sales.'+@nom_tabla2+' soh
				on sod.SalesOrderID = soh.SalesOrderID
				where TerritoryID = '+@territorio+'
				group by ProductID
				order by Total_compras asc'

	set @sql2 = 'select ProductID, Name from '+@servidor+'.'+@nom_b+'.Production.Product';

	end

	if @territorio >= @i4 and @territorio <= @i3 
	begin
	select @servidor = servidor from dicci_dist_proy where bd = @nom_b;
	select @servidor2 = servidor, @nom_b2 = bd from dicci_dist_proy where bd != @nom_bd and id_fragmento != 2

    set @sql = 	'select top 1 sod.ProductID, count(ProductID) as Total_compras from '+@servidor2+'.'+@nom_b2+'.Sales.'+@nom_tabla+' sod
				inner join '+@servidor2+'.'+@nom_b2+'.Sales.'+@nom_tabla2+' soh
				on sod.SalesOrderID = soh.SalesOrderID
				where TerritoryID = '+@territorio+'
				group by ProductID
				order by Total_compras asc'

	set @sql2 = 'select ProductID, Name from '+@servidor+'.'+@nom_b+'.Production.Product';

	end
	end
	else
	begin
	--select @nom_bd = db_name();
	select 'Error. Territorio no valido'
	end

	insert into @VAR exec sys.sp_executesql @sql
	insert into @NOM exec sys.sp_executesql @sql2

	Select vr.ProductoID, nm.Nombre, vr.Total_Compras from @VAR vr
	inner join @NOM nm
	on vr.ProductoID = nm.ProductoID

end

exec productos_menossolicitados '8';
exec productos_menossolicitados '10';

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

	set @sql = 'select * 
				from ['+@servidor+'].['+@nom_bd+'].Sales.'+@nom_tabla+'
				where CardType = ''SCard'''

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

create procedure ventas_2a4 as
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

	DECLARE @VAR TABLE (
		SalesOrderID int,
		RevisionNumber tinyint,
		OrderDate datetime,
		DueDate datetime,
		ShipDate datetime,
		Statuss tinyint,
		OnlineOrderFlag bit,
		SalesOrderNumber nvarchar(25),
		PurchaseOrderNumber nvarchar(25),
		AccountNumber nvarchar(15),
		CustomerID int,
		SalesPersonID int,
		TerritoryID int,
		BillToAddressID int,
		ShipToAddressID int,
		ShipMethodID int,
		CreditCardID int,
		CreditCardApprovalCode varchar(15),
		CurrencyRateID int,
		SubTotal money,
		TaxAmt money,
		Freight money,
		TotalDue money,
		Comment nvarchar(128),
		rowguid uniqueidentifier,
		ModiefiedDate datetime);

	while @i<4
	begin
		--set @i = @i+1;
		select @servidor = servidor, @nom_bd = bd from dicci_dist_proy where id_fragmento = @i;
		
		set @sql = 'select * from ' + @servidor + '.' + @nom_bd + '.Sales.'+ @nom_tabla + ' '+ 'where ' +@condicion + '' + 'order by ' + @condicion2 +'';
		
		set @i = @i+2

		--exec sp_executesql @sql
		insert into @VAR exec sys.sp_executesql @sql
	end 
	Select * from @VAR
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

-- Consulta 1 - Segmentos
--Listar las ordenes que utilizan el método de envio 'CARGO TRANSPORT 5' con su tarifa de envio

alter procedure listar_ordenes_por_metodo @oferta nvarchar(5) as
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

alter procedure listar_5_representantes as
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

alter procedure listar_5_productos_mas_vendidos as
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

alter procedure listar_producto_mas_caro_oferta as
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