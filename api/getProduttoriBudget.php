<?PHP

include("config.php"); 

$records = select($db, "SELECT produttore as 'Produttore', avg(budget) as 'Budget medio' FROM film
						  GROUP BY produttore
						  ORDER BY avg(budget) DESC
						  LIMIT 15");

foreach( $records as $record )  
   $budgetProduttore[] = array($record['Produttore'], intval($record['Budget medio'])); 

header("Content-Type: application/json"); 
echo(json_encode($budgetProduttore));

?>