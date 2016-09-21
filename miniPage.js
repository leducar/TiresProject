
function init(id,e){ // zove se u body na pocetku, u practise
	eventHandlers(); //
	getDataForPage(id);
	e.preventDefault();
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
	var oneTire = $('<div class=""> </div>');
	var tireImg = $('<img class="oneTireStyle" src="img/'+resultList.images+'"></img>');
	var tireDescription = $('<div class ="oneTireStyle" style="border-color:orange;">'+resultList.brand+'</div>')
	
	oneTire.append(tireImg);
	oneTire.append(tireDescription);
	outerBox.append(oneTire); 
}