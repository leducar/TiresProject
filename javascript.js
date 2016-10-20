function start(){ // zove se u body na pocetku, u practise
	eventHandlers(); //
	//getDateForPage(id);
}


function eventHandlers() {
	//////////// PRVI DOGADJAJ
	$(".btn-primary").on('click', function(){
	//	konj.preventDefault() // nemoj raditi po difoltu FORME....preventDefault() UGRADJENA METODA KLASE CIJI JE OBJEKAT KONJ POMOCU KOJE PRISTUPAMO METODI
	//	prepareEnviroment(); // BRISE STARE REZULTATE
		getResults(); //FUNKCIJA KOJA NA OSNOVU PARAMETARA DOBAVLJA REZULTATE 
		
	});	
	//////////////// DRUGI DOGADJAJ
	// $("#select_brand").on('change', determineSelectedValue());	// na promenu PRVOG MENIJA pozovi fju KOJA ODREDJUJE VREDNOSTI U DRUGOM MENIJU

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
	var cityname = $("#inputField").val(); // TEKST-VREDNOST OD SELEKTOVANE OPCIJE ELEMENTA select_brand
	//var name = $("#search_box option:selected").text(); // TEKST-VREDNOST OD SELEKTOVANE OPCIJE ELEMENTA search_box

	var data = 'cityname=' + cityname;
	if (cityname){ // if name is not empty
		$.ajax ({ //http://www.w3schools.com/jquery/ajax_ajax.asp
			type: "GET", //NAZIV METODE GET ILI POST TYPE Specifies the type of request. (GET or POST)
			url: "process.php",// NA OVAJ PROCES SALJEMO PODATKE...URL Specifies the URL to send the request to. Default is the current page
			data : data, //DATA Specifies data to be sent to the server

			beforeSend: function(data) { // OVO DATA JE ONO STO SALJEM
			//	alert('before'); // DA PROVERIM DA LI JE DOSLO DO OVDE, PRE SLANJA AJAX RIKVESTA
			},
			success: function(data){ // POSLE AJAX POZIVA ...OVO DATA JE ONO STO DOBIJEM KAO REZULTAT IZ BAZE
				var resultList = $.parseJSON(data); // RASPAKUJEM-KONVERTUJEM PODATKE IZ JSON FORMATA U OBICAN NIZ
				var outerBox = $('.searchResults'); // VELIKI CRVENI DIV SA SVIM KONTEJNERIMA-GUMAMA
				 $.each(resultList, function(i, one_container) { // when we have array of objects 
					createOneExample(one_container, outerBox); // POZIVAMO METODU KOJA DINAMICKI KREIRA JEDAN KONTEJNER
				});
					
			} 
		})
	 }
	//else{ //DRUGI SLUCAJ KAD IMAM SAMO BREND BEZ NAVODJENJA IMENA GUME
	// 	$.ajax ({
	// 		type: "POST",
	// 		url: "getResultsByName.php",
	// 		data : data_blabla,

	// 		beforeSend: function(data) {
	// 		//	alert('before');
	// 		},
	// 		success: function(data){
	// 			var resultList = $.parseJSON(data);
	// 			var outerBox = $('.searchResults');
	// 			 $.each(resultList, function(i,one_container) { // when we have array of objects
	// 				createOneExample(one_container,outerBox);
	// 				//getDataForPage(one_container.id);				
	// 			});
				
	// 		} 
	// 	})
	// }
}

function createOneExample (one_container, outerBox) { // OVA FJA DINAMICKI PRIKAZUJE REZULTATE, PRAVI PRIKAZ REZULTATA NA STRANICI

	var oneTire = $('<div class="col-sm-6 col-md-4 col-md-2 div_top_container"> </div>');
	var brand = $('<div class ="basisNewsStyle" style="border-color:orange;">'+one_container.brand+'</div>') //JS SINTAKSA IZ OBJEKTA SE UZIMA JEDAN PROPERTY  
	var width = $('<div class ="basisNewsStyle" style="border-color:red;">'+one_container.width+'/'+one_container.height+'/R'+one_container.radius+'</div>');
	var price = $('<div class ="basisNewsStyle" style="border-color:blue;">'+one_container.price+''+",00 RSD"+'</div>');
	var divforLink = $('<div class ="basisNewsStyle" style="background:skyblue;"></div>');
	var divforLink = $('<div class ="basisNewsStyle tireLink"></div>');
	var link = $('<a class="tireLink" href="miniPage.php?tireId='+one_container.id+'">'+"Detaljnije"+'</a>');
	var tireImg = $('<img class="tirephoto" src="img/'+one_container.images+'"></img>');
	


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

