//intialize function called when the script loads
function initialize() {
	cities();
    debugAjax();
};

//begin the function cities with array data, and table function
function cities() {

	//array with table data
	var cityPop = [
		{
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//create element table
	var table = document.createElement("table");

	//create header row
	var headerRow = document.createElement("tr");

	//label the header row
	headerRow.insertAdjacentHTML("beforeend", "<th>City</th><th>Population</th>");

	//add the row to the table
	table.appendChild(headerRow);

	//define loop for first two columns of the table
	for (var i = 0; i < cityPop.length; i++) {

		var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";

		//add the row's html string to the table
		table.insertAdjacentHTML('beforeend', rowHtml);

	};

	//connect table in js file to #myDiv in html file
	document.querySelector("#myDiv").appendChild(table);

	//run add columns function
	addColumns(cityPop);

	//run add events function
	addEvents();

};

//start the function for adding columns
function addColumns(cityPop) {

	//define the variable rows, and select all of them
	var rows = document.querySelectorAll("tr")

	//begin for each loop, using rows and i as an iterator
	rows.forEach(function (row, i) {

		//if i is 0 then please create the header City Size, else add City Size according to the guidelines provided.
		//use i-1 to return to previous object after the header
		if (i == 0) {
			row.insertAdjacentHTML("beforeend", "<th> City Size </th>")
		} else {
			var citySize;

			if (cityPop[i - 1].population < 100000) {
				citySize = 'Small';

			} else if (cityPop[i - 1].population < 500000) {
				citySize = 'Medium';

			} else {
				citySize = 'Large';
			};

			//insert citySize element into row
			row.insertAdjacentHTML("beforeend", '<td>' + citySize + '</td>');
		};
	});
};

//begin function addEvents
function addEvents() {

	//begin the random color generator with the mouseover event listener
	function mouseOver() {

		//define table using query selector in the document
		var table = document.querySelector("table");

		//define the property of variable color
		var color = "rgb(";

		//create three random numbers for RGB color, add comma and end parantheses for format
		for (var i = 0; i < 3; i++) {

			color += Math.round(Math.random() * 255);

			if (i < 2) {
				color += ",";

			} else {
				color += ")";

			};
		};

		//assign color to table.style
		table.style.color = color;

	};

	//adding the event listener to run the color generator
	document.querySelector("table").addEventListener("mouseover", mouseOver)

	//begin the clickme function
	function clickme() {

		//generate popup alert
		alert('Hey, you clicked me!');

	};

	//adding click event listener to run the clickme function
	document.querySelector("table").addEventListener("click", clickme)

}

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

//call the intialize function after the DOM has loaded
document.addEventListener('DOMContentLoaded', initialize)