<?php
	
	include_once('/db/retrive.php');
	
	if (isset($_POST['brand']))
	{
		$brand = $_POST['brand'];
		//echo $name;

		$characters = strlen($brand);
		if($characters >2)
		{
			$db = new dbOperations();
			$results = array();
			$results = $db->searchByName($brand);
			echo json_encode($results);
			//print_r($results);
		}
	}
?>