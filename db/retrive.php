<?php 

class propertiesClass {
	public $id;
    public $brand;
	public $name;
	public $radius;
	public $width; 
	public $height;
	public $price;
    public $images;
    public $description;
    	
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


    public function searchByBrandAndName($brand, $name)
    {
    	$sql= "SELECT id,brand,name,radius,width,height,price,images,description FROM product WHERE brand LIKE '%" . $brand .  "%' AND  name LIKE '%" . $name ."%'"; 
		// koja JE OVO SINTAKSA'%" . $brand .  "%'
	   	$this->STH = $this->DBH->query($sql);
	  	

	  	$objReturn = array(); // NIZ REZULTATA-INICIJALIZACIJA
	   	while($row=$this->STH->fetch(PDO::FETCH_ASSOC)){ // row JE NIZ REZULTATA ???????????????? STA OVO RADIIIIIII

	   		$properties = new propertiesClass(); // NOVI OBJEKAT KLASE, U STVARI NIZ
		   	$properties->id = $row['id'];
            $properties->brand = $row['brand'];
             $properties->radius = $row['radius'];
		  	$properties->width = $row['width'];
             $properties->height = $row['height'];
		  	$properties->price = $row['price'];
            $properties->images = $row['images'];

		  	array_push($objReturn,$properties); // NA NIZ objReturn SE DODAJE NIZ properties
			
			//????????????? ZAR NIJE MOGLO ODMAH DA SE DODA ROW NA objReturn array_push($objReturn,$row);
		}
		
		return $objReturn;
	}


    public function searchByName ($brand)
    {
        $sql= "SELECT id,brand,name,radius,width,height,price,images,description FROM product WHERE brand LIKE '%" . $brand .  "%'";
        $this->STH = $this->DBH->query ($sql);
        

        $objReturn = array();
        while($row=$this->STH->fetch(PDO::FETCH_ASSOC)){ // row is array of results

            $properties = new propertiesClass();
            $properties->id = $row['id'];
            $properties->brand = $row['brand'];
             $properties->radius = $row['radius'];
            $properties->width = $row['width'];
             $properties->height = $row['height'];
            $properties->price = $row['price'];
            $properties->images = $row['images'];

            array_push($objReturn,$properties);
        }
        
        return $objReturn;
    }

    public function getDataForPage ($id)
    {
        $sql= "SELECT id,brand,name,radius,width,height,price,images,description FROM product WHERE id=".$id;
        $this->STH = $this->DBH->query ($sql);

        $objReturn = array();
        while($row=$this->STH->fetch(PDO::FETCH_ASSOC)){ // row is array of results

            $properties = new propertiesClass();
            $properties->id = $row['id'];
            $properties->brand = $row['brand'];
            $properties->name = $row['name'];
            $properties->radius = $row['radius'];
            $properties->width = $row['width'];
            $properties->height = $row['height'];
            $properties->price = $row['price'];
            $properties->images = $row['images'];
            $properties->description = $row['description'];

            array_push($objReturn,$properties);
        }

        return $objReturn;
    }



}
?>
