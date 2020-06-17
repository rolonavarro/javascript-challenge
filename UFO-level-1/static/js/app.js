// from data.js
const tableData = data;

// ttable

const tbody = d3.select('tbody');

// loop through though the data

function createTable(data) {
    // Use d3 to update each cell's text with data
    tbody.html("");

    data.forEach(function(ufoReport) {
        //Append row for each entry in ufoReport
        var row = tbody.append("tr");
        
        Object.entries(ufoReport).forEach(function([key, value]) {

        //Append a cell to the row for each value in the data
        var cell = row.append("td");

        //Insert data into a table
        cell.text(value);
        });
    });
}

//Selects the submit button id 
// var submit = d3.select("#filter-btn");

function handleClick() {
    const date = d3.select('#datetime').property("value");
    let filteredData = tableData;

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    createTable(filteredData);
}

d3.selectAll("#filter-btn").on("click", handleClick);

createTable(tableData);


