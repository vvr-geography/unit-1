//defining a function that will be called later to insert the stringifyied JSON data into the index.HTML. 
//this uses the parameter myData which is defined later, but needs to be consistent inside the function

function debugCallback(myData) {
	document.querySelector("#myDiv").insertAdjacentHTML('beforeend', 'GeoJSON data: <br>' + JSON.stringify(myData))
};

//begin function debugAjax
function debugAjax() {

	//declare myData
	var myData;

	//fetch the geojson data, default "GET"
	fetch("data/MegaCities.geojson")

		//first call back function is returns a converted json file
		.then(function (response) {
			return response.json();
		})

		//second callback function: 
		.then(function (response) {
			// 1) defines myData as response,
			myData = response;
			// 2) runs the function debug, which is defined above,
			debugCallback(myData);
			//3)logs myData in console to verify it is working
			console.log(myData)
		})
};

//this runs the debugAjax function once the DOM has loaded
document.addEventListener('DOMContentLoaded', debugAjax);