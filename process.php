<?php
	
	include_once('/db/retrive.php'); // ZASTO ONCE PIAM DULA
	
	if (isset($_POST['brand']) && isset($_POST['name']) )
	{
		$brand = $_POST['brand'];
		$name = $_POST['name'];
		

		$characters = strlen($name); // broj karaktera od name... ZASTO CEMU OVO SLUZI
		if($characters >0) // RANI RALJE AKO JE ISTA POSLATO
		{
			$db = new dbOperations(); // OBJEKAT KLAS dbOperations POMOCU KOJED PRISTUPAMO METODAMA KLASE
			$results = array(); // INICIJALIZACIJA NIZA
			$results = $db->searchByBrandAndName($brand,$name); //METODA KLASE KOJA VRACA NIZ REZULTATA (NIZ SA NEODREDJENIM BROJEM CLANOVA?)
			echo json_encode($results); // PAKOVAJE REZULTATA U JSON FORMAT // echo KAO RETURN METODE
			//print_r($results);
		}
	}
?>