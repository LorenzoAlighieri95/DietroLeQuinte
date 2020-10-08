<?PHP

include("config.php");   
 

$records = select($db, "SELECT titoloOriginale
							FROM film
							ORDER BY rand() LIMIT 1");
							
header("Content-Type: application/json"); 
echo(json_encode($records['0']['titoloOriginale']));
 

?>