<?PHP
/******************************
 * Open a Connection to MySQL
 * 
 ******************************/
 
function openDB($database, $password, $username, $servername){
   // Create connection
   $conn = mysqli_connect($servername, $username, $password, $database); 
   if (!$conn) die("dbLibrary: errore di connessione: ". mysqli_connect_error($conn));
   
   // Specifico il character set da usare quando invio o ricevo dati
   if (!mysqli_set_charset($conn, "utf8")) printf("Error loading character set utf8: %s\n",  mysqli_error($conn)); 

   return $conn;
} 


/******************************
 * Lettura dei 
records
        *
 ******************************/
 
function select($conn,$sql){
   // Esecuzione query
   $resultSet = mysqli_query($conn, $sql);
   if(!$resultSet) print("Errore esecuzione $sql:" . mysqli_error($conn));
   
   // Copio i records in un array associativo
   
   $records=array();   
   while($rec=mysqli_fetch_assoc($resultSet)) 
		$records[]=$rec;
   // Liberazione della memoria impegnata dal result set   
   mysqli_free_result($resultSet);
   
   return $records;
} 

function closeDB ($conn){
	mysqli_close($conn);
}


?>