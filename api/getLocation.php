<?PHP
 
include("config.php");

$records = select($db, "SELECT COUNT(location) as 'Numero film', location 'Paese di produzione'
						  FROM film
						  GROUP BY location
						  HAVING COUNT(location)>17
						  ORDER BY COUNT(location)");
 
foreach( $records as $record )  
   $locationFilm[] = array($record['Paese di produzione'], intval($record['Numero film'])); 


header("Content-Type: application/json"); 
echo(json_encode($locationFilm));


?>