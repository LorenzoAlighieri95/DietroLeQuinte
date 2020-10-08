<?PHP

include("config.php");  

$records = select($db, "SELECT regista as 'Nome',sum(budget) 'Budget totale'
							FROM film,registi 
							Where film.idRegista=registi.idRegista AND film.idRegista!=28
							GROUP BY regista 
							ORDER BY sum(budget) DESC 
							LIMIT 15");
 
foreach( $records as $record )  
   $registaBudgetSum[] = array($record['Nome'], intval($record['Budget totale'])); 

header("Content-Type: application/json"); 
echo(json_encode($registaBudgetSum));


?>