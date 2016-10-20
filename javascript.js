function start(){ // zove se u body na pocetku, u practise
	eventHandlers(); //
	//getDateForPage(id);
}


function eventHandlers() {
	//////////// PRVI DOGADJAJ
	$(".btn-primary").on('click', function(e){
		e.preventDefault() 
		prepareEnviroment(); 
		getResults(); 
		
	});	
	
	$('#inputField').on('input', function() {
		var input=$(this);
		var is_name=input.val();
		if(is_name){input.removeClass("invalid").addClass("valid");}
			else{input.removeClass("valid").addClass("invalid");}
	});

	$(".btn-primary").click(function(event){
		var form_data=$("#inputField").val();
		var error_free=true;
		for (var input in form_data){
			var element=$("#inputField"+form_data[input]['cityname']);
			var valid=element.hasClass("valid");
			var error_element=$("span", element.parent());
			if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
				else{error_element.removeClass("error_show").addClass("error");}
		}
		if (error_free){
			event.preventDefault(); 
			alert('Morate uneti grad koji zelite');
		}
	});
	
}


function getResults() {

	//alert ('tet');
	var cityname = $("#inputField").val(); 
	//var name = $("#search_box option:selected").text(); // TEKST-VREDNOST OD SELEKTOVANE OPCIJE ELEMENTA search_box

	var data = 'cityname=' + cityname;
	if (cityname){ 
		$.ajax ({ 
			type: "GET", 
			url: "process.php",
			data : data, 

			beforeSend: function(data) { 
			//	alert('before'); 
			},
			success: function(data){ 
				var resultList = $.parseJSON(data); 
				var outerBox = $('.searchResults'); 
				 $.each(resultList, function(i, one_container) { 
					createOneExample(one_container, outerBox); 
				});
					
			} 
		})
	 }

}

function createOneExample (one_container, outerBox) { 

	var oneTire = $('<div class="col-sm-6 col-md-4 col-md-2 div_top_container"> </div>');
	var brand = $('<div class ="basisNewsStyle" style="border-color:orange;">'+one_container.cityName+'</div>') 
	var width = $('<div class ="basisNewsStyle" style="border-color:red;"></div>');
	var price = $('<div class ="basisNewsStyle" style="border-color:blue;">'+one_container.hotelName+'</div>');
	var divforLink = $('<div class ="basisNewsStyle" style="background:skyblue;"></div>');
	var divforLink = $('<div class ="basisNewsStyle tireLink"></div>');
	var link = $('<a class="tireLink" href="miniPage.php?tireId='+one_container.id+'">'+"Detaljnije"+'</a>');
	var tireImg = $('<img class="tirephoto"></img>');
	


	//link.append(tireImg);
	divforLink.append(link);

	oneTire.append(brand);
	oneTire.append(width);
	oneTire.append(price);
	oneTire.append(tireImg);
	oneTire.append(divforLink);
	//oneTire.append(link);
	outerBox.append(oneTire); //U VELIKI BOX APENDUJEM JEDAN KONTEJNER
}

function prepareEnviroment () { //FUNKCIJA KOJA BRISE SVE IZ ELEMENTA-PROSTORA ZA PRIKAZ REZULTATA PRE ISPISA NOVIH REZULTATA
	
	$( ".div_top_container").remove();
}


// method for changing tires
function determineSelectedValue(){

	$("#select_brand").change(function() {
		var $dropdown = $(this); // POKUPI VREDNOSTI OD SELECT BRENDA
		$.getJSON("datafile.json", function(pera) { // OVO PERA JE JSON NIZ KOJI SADRZI PODATKE O KATEGORIJI GUMA
	  
		var key = $dropdown.val(); // VREDNOST OD SELEKTOVANE OPCIJE BRENDA
		var vals = []; // PRAZAN NIZ
		          
	    switch(key) {
	      case 'tigar':
	        vals = pera.tigar.split(","); // SPLIT CE DA RAZDVOJI ZAREZAMA VREDNOSTI...U VALS UBACUJE VREDNOSTI IZ DATA KOJE PRIPADAJU TIGRU
	        break;
	      case 'good_year':
	        vals = pera.good_year.split(",");
	        break;
	      case 'pireli':
	        vals = pera.pireli.split(",");
	        break;
	      case 'kleber':
	        vals = pera.kleber.split(",");
	        break;
	      case 'dunlop':
	        vals = pera.dunlop.split(",");
	        break;                        
	      case 'base':
	        vals = ['Please choose from above']; 
	    }
    
	    
	    var $secondChoice = $("#search_box");
	    $secondChoice.empty(); //BRISANJE STARE VREDNOSTI, POSTAVLJANJE NA INICIJALNO STANJE
		    $.each(vals, function(index, kkk) { // index je iteracija kao u for petlji, a kkk je jedna vrednost tj jedna vrednost gume iz vals
		      $secondChoice.append("<option>" + kkk + "</option>");
		    });

	  	});
	});
}

