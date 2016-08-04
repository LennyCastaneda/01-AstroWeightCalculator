// Create a function that will be called when the user clicks on the button element you added to your HTML.
// This function should grab the values entered by the user from the input element and the select element.
// The function should then calculate the weight of the user on the selected planet, 
//and show the weight to the user in the p element you added to your HTML.

var calcButton = document.getElementById("btnCalculate"); //weight calcuating button
var pElement = document.getElementById('user_planet_weight'); // get the innerHTML of the < p >


calcButton.onclick = function() {
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

/******** ANOTHER WAY TO WRITE THIS FUNCTIONS IN JAVASCRIPT**********/

// function calculateWeight(){
// 	var user_weight = document.getElementById('planet_value').value;

// 	var select = document.getElementById('planet_value');

// 	var options = select.options;

// 	var selectedOption = options[select.selectedIndex];

// 	var planeName = selectedOption.innerHTML;
// 	var planet_value = selectedOption.value;

// 	var weightOnPLanet = userWeight * planet_value;

// 	var user_planet_weight.innerHTML = "If you were on " + selectedPlanetName + ", you would weigh " + calculatedWeight + "lbs!";
// }


/******** ANOTHER WAY TO WRITE THIS FUNCTIONS IN jQuery**********/

// $("#btnCalculate").click(); { // when this element is clicked call this function, JavaSCript callback, one function calling another function.
// 	var user_weight = $("#user_weight").val();

// 	var planet_text = $("#planet_value option:selected").text(); // selects what the user chooses and assigned it ti planet_value variable.

// 	var planet_value = $("#planet_value option:selected").val();

// 	var calculatedWeight = user_weight * planet_value; 


// 	$("user_planet_weight").text("If you were on " + selectedPlanetName + ", you would weigh " + calculatedWeight + "lbs!")

// });
