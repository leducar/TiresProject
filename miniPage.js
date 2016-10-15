
function init(id){ // zove se u body na pocetku, u practise
	eventHandlers(); //
	getDataForPage(id);
}




function eventHandlers() {

	$( document ).on( 'click', '.tireLink', function(e) {
		e.preventDefault() ;
		getDataForPage();
	});
}


function getDataForPage(tireId)
{
	//var id = tireId;
	//var id = 4;
	var dataForService= 'tireId='+tireId;
	$.ajax ({
	type: "GET",
	url: "getDatabyID.php",
	data : dataForService,

		beforeSend: function(data) {
		//	alert('before');
		},
		success: function(data){
			console.log(data);
			var resultList = $.parseJSON(data);
			var outerBox = $('.searchResultsForMiniPage');
			createOne(resultList[0], outerBox);
			//alert(data);
		} 
	})
}


function createOne(resultList, outerBox)
{
	var oneTire = $('<div class = "col-md-12" style="border:1px solid blue"> </div>');
	var tireImg = $('<img class="oneTireStyle" src="img/'+resultList.images+'"></img>');
	var tireBrand = $('<div class ="descriptionStyle" style="border-color:orange;font-size:40px;">'+resultList.brand+'</div>')
	var tireDescription = $('<div class ="basisNewsStyle tireDescription">'+resultList.description+'</div>')
	var additionalImages = $('<div class="additionalImages"> </div>');
	
	tireBrand.append(tireDescription);
	oneTire.append(tireImg);
	oneTire.append(tireBrand);
	
	oneTire.append(additionalImages); 
	outerBox.append(oneTire); 
}