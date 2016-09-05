function start (){ // zove se u body na pocetku, u practise
	eventHandlers(); // 	
}


function eventHandlers() {
	$("#submit_btn").on('click', function(event){
		event.preventDefault() // nemoj raditi po difoltu
		getResults();
		prepareEnviroment();
	});	

	$("#select_brand").on('change', determineSelectedValue());	

}


function getResults() {

	var brand = $("#select_brand option:selected").text();
	var name = $("#search_box option:selected").text();

	var data = 'brand=' + brand+ "&name="+ name;
	if (name){ // if name is not empty
		$.ajax ({
			type: "POST",
			url: "process.php",
			data : data,

			beforeSend: function(data) {
			//	alert('before');
			},
			success: function(data){
				var arrayOfContainers = $.parseJSON(data);
				var outerBox = $('.searchResults');
				 $.each(arrayOfContainers, function(i,oneContainer) { // arrayOfContainers is array of objects and oneContainer is one object
					createOneExample(oneContainer,outerBox);				
				});
			} 
		})
	}else{
		$.ajax ({
			type: "POST",
			url: "getResultsByName.php",
			data : data,

			beforeSend: function(data) {
			//	alert('before');
			},
			success: function(data){
				var arrayOfContainers = $.parseJSON(data);
				var outerBox = $('.searchResults');
				 $.each(arrayOfContainers, function(i,oneContainer) { // when we have array of objects
					createOneExample(oneContainer,outerBox);				
				});
			} 
		})
	}
}

function createOneExample (oneContainer, outerBox) {

	var oneTire = $('<div class="div_top_container"> </div>');
	var brand = $('<div class ="basisNewsStyle" style="border-color:orange;">'+oneContainer.brand+'</div>')
	var width = $('<div class ="basisNewsStyle" style="border-color:red;">'+oneContainer.width+'</div>')
	var price = $('<div class ="basisNewsStyle" style="border-color:blue;">'+oneContainer.price+'</div>')
	var tireImg = $('<img class="tirephoto img-responsive " src="img/'+oneContainer.images+'"></img>');

	oneTire.append(brand);
	oneTire.append(width);
	oneTire.append(price);
	oneTire.append(tireImg);
	outerBox.append(oneTire);

}

function prepareEnviroment () {
	
	$( ".div_top_container").remove();
}


// method for changing tires
function determineSelectedValue(){

	$("#select_brand").change(function() {
		var $dropdown = $(this);
		$.getJSON("data.json", function(data) {
	  
		var key = $dropdown.val();
		var vals = [];
		          
	    switch(key) {
	      case 'tigar':
	        vals = data.tigar.split(",");
	        break;
	      case 'good_year':
	        vals = data.good_year.split(",");
	        break;
	      case 'pireli':
	        vals = data.pireli.split(",");
	        break;
	      case 'kleber':
	        vals = data.kleber.split(",");
	        break;
	      case 'dunlop':
	        vals = data.dunlop.split(",");
	        break;                        
	      case 'base':
	        vals = ['Please choose from above']; 
	    }
    
	    
	    var $secondChoice = $("#search_box");
	    $secondChoice.empty();
		    $.each(vals, function(index, value) {
		      $secondChoice.append("<option>" + value + "</option>");
		    });

	  	});
	});
}