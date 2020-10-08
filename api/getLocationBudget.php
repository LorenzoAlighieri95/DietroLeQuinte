<?PHP

include("config.php");

$records = select($db, "SELECT AVG(budget) as 'Budget medio', location as 'Location'
							FROM film
							GROUP BY location
							ORDER BY AVG(budget) DESC
							");
 
foreach( $records as $record )  
   $locationBudget[] = array($record['Location'], intval($record['Budget medio'])); 
 
header("Content-Type: application/json"); 
echo(json_encode($locationBudget));


?>