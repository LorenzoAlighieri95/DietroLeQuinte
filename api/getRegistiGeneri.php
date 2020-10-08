<?PHP

include("config.php");

$createView = "CREATE VIEW numfilm as
						  SELECT attore,regista,COUNT(idFilm) as 'Numero film insieme'
						  FROM film, registi,attori 
						  WHERE film.idRegista=registi.idRegista AND (film.idAttore1=attori.idAttore OR film.idAttore2=attori.idAttore OR film.idAttore3=attori.idAttore) 
						  GROUP BY attore, regista 
						  Having COUNT(idFilm) BETWEEN 4 AND 9 
						  ORDER BY COUNT(idFilm) DESC;";
						  
$dropView="DROP VIEW numfilm;";

mysqli_query($db, $createView);

$records = select($db, "SELECT CONCAT(attore,' & ',regista) AS 'Attori e Registi',`Numero film insieme` 
						  FROM numfilm;");
 

foreach( $records as $record )  
   $attoriRegisti[] = array($record['Attori e Registi'], intval($record['Numero film insieme'])); 

mysqli_query($db, $dropView);
   
 
header("Content-Type: application/json"); 
echo(json_encode($attoriRegisti));

?>