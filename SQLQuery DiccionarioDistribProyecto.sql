/* DICCIONARIO DE FRAGMENTACIÓN */


-- Se debe almacenar en cada fragmento o en cada servidor

CREATE TABLE dicci_dist_proy (
  id_fragmento tinyint primary key, -- identificador del fragmento
  servidor varchar(100), -- nombre del servidor vinculado
  bd varchar(100), -- nombre de la base que aloja al fragmento
  name_tabla varchar(100), -- nombre de la tabla que representa fragmento
  col_frag varchar(100) -- columna que se utiliza como criterio de fragmentación
)