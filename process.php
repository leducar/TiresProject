<?php
	
	include_once('/db/retrive.php');
	
	if (isset($_GET['cityname']))
	{
		$cityname = $_GET['cityname'];
		//echo $cityname;
		$characters = strlen($cityname); 
		
		if($characters >0) 
		{
			$db = new dbOperations(); 
			$results = array(); 
			$results = $db->searchByName($cityname); 
			echo json_encode($results); 
			//print_r($results);
		}
	}else{
		die('There is no such a place in Montenegro ');
	}
?>

