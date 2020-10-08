<?PHP

include("config.php");

$records = select($db, "SELECT AVG(votoMedio) as 'Voto medio', location 
							FROM film 
							GROUP BY location  
							ORDER BY AVG(votoMedio) DESC 
							");
 
foreach( $records as $record )  
   $locationVoto[] = array($record['location'], intval($record['Voto medio'])); 

 
header("Content-Type: application/json"); 
echo(json_encode($locationVoto));


?>