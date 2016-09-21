<?php
	
	include_once('/db/retrive.php'); 
	
	//if (isset($_GET['id']))
	//{
		$id = $_GET['tireId'];
		//echo $id;
				
		$db = new dbOperations(); 
		$results = array(); 
		$results = $db->getDataForPage($id); 
		echo json_encode($results); 
		//print_r($results);
	
	//}
?>