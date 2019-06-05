var gallToLiters = function (gallons) {
    return gallons * 3.785;
};

var tbspToGrams = function (tbsp) {
    return tbsp * 14.3;
};


$(document).ready(function() {
	$("form#gallToLiters").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#gallon").val());
		var result = gallToLiters(number1);
		$("#output").text(number1 + " gallons = " + result +" liters");
	});
	$("form#tbspToGrams").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#tbsp").val());
		var result = tbspToGrams(number1);
		$("#output").text(number1 + " tbsp = " + result +" grams");
	});
});
