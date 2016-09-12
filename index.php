<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Tires Layout Example</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
	    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">


	
	<script src="js/javascript.js"></script>
	<link href="css/mystyle.css" rel="stylesheet" />
</head>

<body onload="start()">
<nav id="myNavbar" class="navbar navbar-default navbar-inverse navbar-fixed-top" role="navigation">
   
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Tutorial Republic</a>
        </div>
   
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="nav navbar-nav">
                <li class="active"><a href="http://www.tutorialrepublic.com" target="_blank">Home</a></li>
                <li><a href="http://www.tutorialrepublic.com/about-us.php" target="_blank">About</a></li>
                <li><a href="http://www.tutorialrepublic.com/contact-us.php" target="_blank">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>

<div class="container">
    <div class="jumbotron" style="background-color:lightgrey">
       <h2>Pretrazi gume</h2> 
	    <h4 style="align:center">Izaberite kategoriju pretrage</h4> 

	    <form  method="post" action="process.php"  id="searchform" class="form-horizontal"> 

			<div class="form-group">
		        <label class="col-xs-3 control-label">Brand</label>
		        <div class="col-xs-5 selectContainer">
		            <select id = "select_brand" name="brand" class="form-control">
		                <option value="base">Please select</option>
		                <option value="tigar">Tigar</option>
		                <option value="good_year">Good Year</option>
		                <option value="pireli">Pireli</option>
		                <option value="kleber">Kleber</option>
		                <option value="dunlop">Dunlop</option>
		            </select>
		        </div>
		    </div>

		    <div class="form-group">
		        <label class="col-xs-3 control-label">Name</label>
		        <div class="col-xs-5 selectContainer">
		            <select id = "search_box" name="name" class="form-control">
		                <option> Please choose from above</option>
		            </select>
		        </div>
		    </div>
			<br><br>
	      <input  type="submit" name="submit" value="Search" id="submit_btn"> 
	    </form> 
		</div>
    <div class="row searchResults">   </div>

	</script>
</body>
</html>                                		