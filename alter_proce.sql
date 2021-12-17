use NORTEAMERICA
alter procedure numero_clientes_listar @territorio nvarchar (100) as
begin
	declare @servidor nvarchar(100);
	declare @sql nvarchar(1000);
	declare @region nvarchar(100);

	select @servidor = servidor, @region = bd
	from dicci_dist_proy
	where bd = 'AdventureWorks2017'
	--id_fragmento in (select id_fragmento from val_col_frag where val_col = @territorio);

	set @sql =  'select st.Name as ''Territorio'', count(*) as ''TotalClientes'' 
				from [' + @servidor + '].' + @region + '.Sales.Customer sc 
				inner join [' + @servidor + '].' + @region + '.Sales.SalesTerritory st on st.TerritoryID = sc.TerritoryID
				where sc.TerritoryID = ' + @territorio + ' and PersonID is not null
				group by st.Name';

	exec sp_executesql @sql
end
Alter procedure ordenes_rventas as
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

	while @i<4
	begin
		--set @i = @i+1;
		select @servidor = servidor, @nom_bd = bd from dicci_dist_proy where id_fragmento = @i;
		
		set @sql = 'select SalesPersonID as "RepresentanteVentas", count(*) as "Ordenes" from ' + @servidor + '.' + @nom_bd + '.Sales.'+ @nom_tabla + ' '+  'group by ' + @condicion +'';
		
		set @i = @i+2

		exec sp_executesql @sql
	end 
end

exec ordenes_rventas;

Alter procedure ventas_person as
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

	while @i<4
	begin
		--set @i = @i+1;
		select @servidor = servidor, @nom_bd = bd from dicci_dist_proy where id_fragmento = @i;
		
		set @sql = 'select '''+@nom_bd+''' as Territorio, SalesPersonID as "RepresentantVentas", sum(TotalDue) as "TotaVentas" from ' + @servidor + '.' + @nom_bd + '.Sales.'+ @nom_tabla + ' '+  'group by ' + @condicion +'';
		
		set @i = @i+2

		exec sp_executesql @sql
	end 
end
exec ventas_person;