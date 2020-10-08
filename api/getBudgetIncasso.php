<?PHP
include("config.php");

$createView = "CREATE VIEW rapportoBudgetIncassi as
				SELECT (incasso/budget) as rapporto, idFilm
				FROM film;";
				
$dropView="DROP VIEW rapportoBudgetIncassi;";

mysqli_query($db, $createView);

$records = select($db, "SELECT genere as 'Genere', avg(rapporto) as 'Rapporto medio budget/incassi'
						  FROM film,rapportoBudgetIncassi
						  WHERE rapportoBudgetIncassi.idFilm=film.idFilm
						  GROUP BY genere
						  ORDER BY avg(rapporto) DESC;");
 

foreach( $records as $record )  
   $rapporto[] = array($record['Genere'], round(floatval($record['Rapporto medio budget/incassi']),2)); 

 mysqli_query($db, $dropView);
 

header("Content-Type: application/json"); 
echo(json_encode($rapporto));

?>