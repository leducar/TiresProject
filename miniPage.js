
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
			//var resultList = $.parseJSON(data);
			alert(data);
			//alert(data);
		} 
	})
}