<?php
	
	include_once('/db/retrive.php');
	
	if (isset($_POST['brand']) && isset($_POST['name']) )
	{
		$brand = $_POST['brand'];
		$name = $_POST['name'];
		//echo $name;

		$characters = strlen($name);
		if($characters >2)
		{
			$db = new dbOperations();
			$results = array();
			$results = $db->searchByBrandAndName($brand,$name);
			echo json_encode($results);
			//print_r($results);
		}
	}
?>