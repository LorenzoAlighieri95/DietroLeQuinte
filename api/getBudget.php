<?PHP

include("config.php");

$records = select($db, "SELECT genere as 'Genere', avg(budget) as 'Budget medio' FROM film
						  GROUP BY genere
						  ORDER BY avg(budget) DESC");
 
foreach( $records as $record )  
   $budget[] = array($record['Genere'], intval($record['Budget medio'])); 


header("Content-Type: application/json"); 
echo(json_encode($budget));

?>