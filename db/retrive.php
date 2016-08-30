<?php 

class propertiesClass {
	public $brand;
	public $name;
	public $radius;
	public $width; 
	public $height;
	public $price;
    public $images;
    	
}

class dbOperations extends propertiesClass 
{
    private $DBH;
   	private $STH;

    public function __construct()
    {
        try {
            $servername = "localhost";  //  hostname
            $dbname = "gume";  //  databasename
            $username = "root";  //  username
            $password = "pera";  //  password

            $this->DBH = new PDO('mysql:host='.$servername.'; dbname='.$dbname, $username, $password);
            $this->DBH->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
            //echo 'Successfully connected to the database!';  
        }
        catch (PDOException $err) {
            $err->getMessage() . "<br/>";
        }
    }


    public function searchByBrandAndName ($brand,$name)
    {
    	$sql= "SELECT brand,width,price,images FROM product WHERE brand LIKE '%" . $brand .  "%' AND  name LIKE '%" . $name ."%'";
	   	$this->STH = $this->DBH->query ($sql);
	  	

	  	$objReturn = array();
	   	while($row=$this->STH->fetch(PDO::FETCH_ASSOC)){ // row is array of results

	   		//$properties = new propertiesClass();
		   	//$properties->
            //$brand = $row['brand'];
		  	//$properties->
            //$width = $row['width'];
		  	//$properties->
            //$price = $row['price'];
            //$properties->
            //$images = $row['images'];

		  	array_push($objReturn,$row);
		}
		
		return $objReturn;
	}


    public function searchByName ($brand)
    {
        $sql= "SELECT brand,width,price,images FROM product WHERE brand LIKE '%" . $brand .  "%'";
        $this->STH = $this->DBH->query ($sql);
        

        $objReturn = array();
        while($row=$this->STH->fetch(PDO::FETCH_ASSOC)){ // row is array of results

            // $properties = new propertiesClass();
            // $properties->brand = $row['brand'];
            // $properties->width = $row['width'];
            // $properties->price = $row['price'];
            // $properties->images = $row['images'];

            array_push($objReturn,$row);
        }
        
        return $objReturn;
    }



}
?>
