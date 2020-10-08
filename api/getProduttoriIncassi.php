<?PHP

include("config.php");

$records = select($db, "SELECT produttore as 'Produttore', avg(incasso) as 'Incasso medio' FROM film
						  GROUP BY produttore
						  ORDER BY avg(incasso) DESC
						  LIMIT 15");
 
foreach( $records as $record )  
   $incassoProduttore[] = array($record['Produttore'], intval($record['Incasso medio'])); 
 
header("Content-Type: application/json"); 
echo(json_encode($incassoProduttore));

?>