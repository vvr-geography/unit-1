function myFunc(){
    document.querySelector("#myDiv").insertAdjacentHTML('beforeend',"Hello World!");
};

window.onload = myFunc();

//initialize function called when the script loads
function initialize(){
    cities();
    //tigers();
};
//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
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
    }]

    //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for(var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend',rowHtml);
    }

    

    document.querySelector("#myDiv").appendChild(table);
}

document.addEventListener('DOMContentLoaded',initialize)

/* function tigers() {
    var tigers = [
        'Siberian Tiger',
        'Bengal Tiger',
        'Indochinese Tiger',
        'Malayan Tiger',
        'South China Tiger',
        'Sumatran Tiger',
        'Caspian Tiger',
        'Bali Tiger',
        'Javan Tiger'
    ];

    var ranges = [
        'North Asia',
        'Indian subcontinent',
        'Southeast Asia',
        'Southeast Asia',
        'China',
        'Indonesia',
        'Central Asia',
        'Indonesia',
        'Indonesia'
    ];

    var statuses = [
        'Endangered',
        'Endangered',
        'Near critically endangered',
        'Critically endangered',
        'Near extinction',
        'Critically endgangered',
        'Extinct',
        'Extinct',
        'Extinct'
    ];

    //create table
    var table = document.createElement("table");

    //create header row
    var headerRow = document.createElement("tr");

    //create column for tiger name
    var tigerHeader = document.createElement("th");
    tigerHeader.innerHTML = "Tiger Name";
    headerRow.appendChild(tigerHeader);

    //create column for range
    var rangeHeader = document.createElement("th");
    rangeHeader.innerHTML = "Range";
    headerRow.appendChild(rangeHeader);

    //create column for status
    var statusHeader = document.createElement("th");
    statusHeader.innerHTML = "Endangered Status";
    headerRow.appendChild(statusHeader);

    //add row to table
    table.appendChild(headerRow);

    //loop to add new row for each tiger

    for (var i = 0; i < tigers.length; i++){
        var tr = document.createElement("tr");

        var tiger = document.createElement("td");
        tiger.innerHTML = tigers[i];
        tr.appendChild(tiger);

        var range = document.createElement("td");
        range.innerHTML = ranges[i];
        tr.appendChild(range);

        var status = document.createElement("td");
        status.innerHTML = statuses[i];
        tr.appendChild(status);

        table.appendChild(tr);

        //change color
    if (statuses[i] == 'Extinct'){
        status.style.color = 'maroon';
        }

    if (statuses[i] == 'Endangered'){
        status.style.color = 'orange';
        }
    };

    //add table to the div in html
    var mydiv = document.getElementById("mydiv");
    mydiv.appendChild(table);
    
    
};

//call the initialize function when the window has loaded
window.onload = initialize();*/


/*function tigers(){
    var tigersData = [
        {
            tiger: 'Siberian Tiger',
            range: 'North Asia',
            status: 'Endangered'
        },
        {
            tiger: 'Indochinese Tiger',
            range: 'Southeast Asia',
            status: 'Near critically endangered'
        },
        {
            tiger: 'Caspian Tiger',
            range: 'Central Asia',
            statusE: 'Extinct'
        }
    ]

    //create table
    var table = document.createElement("table");

    //create header row
    var headerRow = document.createElement("tr");

    //create column for tiger name
    var tigerHeader = document.createElement("th");
    tigerHeader.innerHTML = "Tiger Name";
    headerRow.appendChild(tigerHeader);

    //create column for range
    var rangeHeader = document.createElement("th");
    rangeHeader.innerHTML = "Range";
    headerRow.appendChild(rangeHeader);

    //create column for status
    var statusHeader = document.createElement("th");
    statusHeader.innerHTML = "Endangered Status";
    headerRow.appendChild(statusHeader);

    //add row to table
    table.appendChild(headerRow);

    for (var i = 0; i < tigersData.length; i++){
        var tr = document.createElement("td");

        var tiger = document.createElement("td");
        tiger.innerHTML = tigersData[i].tiger;
        tr.appendChild(tiger);

        var range = document.createElement("td");
        range.innerHTML = tigersData[i].range;
        tr.appendChild(range);

        var statusE = document.createElement("td");
        statusE.innerHTML = tigersData[i].statusE;
        tr.appendChild(statusE);
    }

    //add table to the div in html
    var mydiv = document.getElementById("mydiv");
    mydiv.appendChild(table);
};

window.onload = initialize();*/