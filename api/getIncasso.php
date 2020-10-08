<?PHP

include("config.php");

$records = select($db, "SELECT genere as 'Genere', AVG(incasso) as 'Incasso medio' 
							FROM `film` 
							GROUP BY genere 
							ORDER BY AVG(incasso) DESC");
 

foreach( $records as $record )  
   $incasso[] = array($record['Genere'], intval($record['Incasso medio'])); 

 
header("Content-Type: application/json"); 
echo(json_encode($incasso));


?>