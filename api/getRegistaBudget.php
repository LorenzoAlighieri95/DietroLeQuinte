<?PHP

include("config.php");

$records = select($db, "SELECT regista as 'Nome',avg(budget) 'Budget medio'
							FROM film,registi 
							Where film.idRegista=registi.idRegista AND film.idRegista!=28
							GROUP BY regista 
							ORDER BY avg(budget) DESC 
							LIMIT 15");
 

foreach( $records as $record )  
   $registaBudget[] = array($record['Nome'], intval($record['Budget medio'])); 

  
header("Content-Type: application/json"); 
echo(json_encode($registaBudget));


?>