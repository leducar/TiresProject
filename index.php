<!-- <!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="javascript.js"></script>
	<link href="mystyle.css" rel="stylesheet" />
</head>

	<body onload="start()">
					 
		First Name: <input id="search_box" type="text" name="firstname"> <br><br>
		Age: <input id="search_age" type="text" name="age"> <br><br>
		<input id="submit_btn" type="submit" value="Submit">

		<div class="searchResults" align="center">	</div>

	</body>
</html> -->
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Tires Layout Example</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"> <!-- bootstrap biblioteka -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css"> <!-- bootstrap tema -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
	<script src="javascript.js"></script>
	<link href="mystyle.css" rel="stylesheet" />
</head>

<body onload="start()"> <!-- na loadovanje stranice se poziva fja start -->
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
    <div class="jumbotron">
       <h2>Pretrazi gume</h2> 
	    <h4 style="align:center">Izaberite kategoriju pretrage</h4> 

	    <form  method="post" action="process.php"  id="searchform" class="form-horizontal"> 

			<div class="form-group">
		        <label class="col-xs-3 control-label">Brand</label>
		        <div class="col-xs-5 selectContainer">
		            <select id = "select_brand" name="brand" class="form-control"> <!--klasa form control je iz bootstrapa...select brend je prvi prozorcic-->
		                <option value="1"></option> <!--BROJEVI SU VEZANI METODOM determineSelectedValue, SA BROJEVIMA U DONJEM PROZORU, TJ AKO IZABEREM KECA IZBACUJE SAMO KECEVE IZ DONJEG MENIJA-->
		                <option value="1">Tigar</option>
		                <option value="2">Good Year</option>
		                <option value="3">Pireli</option>
		                <option value="4">Kleber</option>
		                <option value="5">Dunlop</option>
		            </select>
		        </div>
		    </div>

		    <div class="form-group">
		        <label class="col-xs-3 control-label">Name</label>
		        <div class="col-xs-5 selectContainer">
		            <select id = "search_box" name="name" class="form-control"> <!--search box je drugi prozorcic-->
		                <option value="1"></option>
		                <option value="1">Prima</option>
		                <option value="2"></option>
		                <option value="2">Max</option>
		                <option value="3"></option>
		                <option value="3">Winter</option>
		                <option value="4"></option>
		                <option value="4">Dinaxer</option>
		                <option value="5"></option>
		                <option value="5">Maxer</option>
		            </select>
		        </div>
		    </div>
			<br><br>
	      <input  type="submit" name="submit" value="Search" id="submit_btn"> 
	    </form> 
		</div>
    <div class="searchResults ">   </div>
</body>
</html>                                		