<?PHP
 
include("config.php");

$records = select($db, "SELECT AVG(budget) as 'Budget medio', votoMedio as 'Voto medio'
							FROM film 
							WHERE votoMedio!=2
							GROUP BY votoMedio
							ORDER BY votoMedio DESC");
 

foreach( $records as $record )  
   $votoMedio[] = array($record['Voto medio'], intval($record['Budget medio'])); 

header("Content-Type: application/json"); 
echo(json_encode($votoMedio));


?>