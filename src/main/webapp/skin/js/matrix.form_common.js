
$(document).ready(function(){
	$('input[type=checkbox],input[type=radio],input[type=file]').uniform();
	$('select').select2();
});

$(document).ready(function() { 	

	//------------- Tags plugin  -------------//
	
	$("#tags").select2({
		tags:["red", "green", "blue", "orange"]
	});

	//------------- Elastic textarea -------------//
	if ($('textarea').hasClass('elastic')) {
	}

	//------------- Input limiter -------------//
	if ($('textarea').hasClass('limit')) {
	}

	//------------- Masked input fields -------------//
	$("#mask-phone").mask("(999) 999-9999", {completed:function(){alert("Callback action after complete");}});
	$("#mask-phoneExt").mask("(999) 999-9999? x99999");
	$("#mask-phoneInt").mask("+40 999 999 999");
	$("#mask-date").mask("99/99/9999");
	$("#mask-ssn").mask("999-99-9999");
	$("#mask-productKey").mask("a*-999-a999", { placeholder: "*" });
	$("#mask-eyeScript").mask("~9.99 ~9.99 999");
	$("#mask-percent").mask("99%");

	//------------- Spinners with steps  -------------//
	$( "#spinner1" ).spinner();

	/*Demacial*/
	$( "#spinner2" ).spinner({
      step: 0.01,
      numberFormat: "n"
    });

	/*Custom step size*/
    $( "#spinner3" ).spinner({
      step: 5
    });

    /*Currency spinner*/
    $( "#spinner4" ).spinner({ 
    	numberFormat: "C" 
    });


	//------------- Select plugin -------------//
	$("#select1").select2();
	$("#select2").select2();


	//Boostrap modal
	$('#myModal').modal({ show: false});
	
	//add event to modal after closed
	$('#myModal').on('hidden', function () {
	  	console.log('modal is closed');
	})

});//End document ready functions

