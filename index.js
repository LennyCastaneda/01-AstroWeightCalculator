// Create a function that will be called when the user clicks on the button element you added to your HTML.
// This function should grab the values entered by the user from the input element and the select element.
// The function should then calculate the weight of the user on the selected planet, 
//and show the weight to the user in the p element you added to your HTML.

var calcButton = document.getElementById("btnCalculate"); //weight calcuating button
var pElement = document.getElementById('user_planet_weight'); // get the innerHTML of the < p >


calcButton.onclick = function(){
	// Grab the weight value entered by the user and store it in userWeight
	var userWeight = document.getElementById("user_weight").value;

	// Grab the select element from the DOM
	var selectedPlanet = document.getElementById("planet_value");

	// Grab all the options for the select element array
	var planetValueOptions = selectedPlanet.options; 

	// Grab the 0-based index of the option that the user has currently selected
	var planetIndex = selectedPlanet.selectedIndex;

	// Grab the selection option from the options array
	var planetSelected = planetValueOptions[planetIndex];

	// Grab the value of the option
	var selectedPlanetValue = selectedPlanet.value;

	// Grab the inner HTML of the option
	var selectedPlanetName = planetSelected.innerHTML;

	//Calcualte the weight of user multiplied by planet value.
	var calculatedWeight = selectedPlanetValue * userWeight;

	// insert message in p tag in the HTML page.
	pElement.innerHTML = "If you were on " + selectedPlanetName + ", you would weigh " + calculatedWeight + "lbs!";
};




