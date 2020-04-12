// grab id "currentday" and have value set to moment().format("dddd, MMMM Do");
var currentDay = $("#currentDay").text(moment().format("dddd, MMMM Do"));
var workHours = ["9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm"];
var savedEvents = ["","","","","","","","",""];

//put the functions we want to run when the page load here
generateTable();




// display the time blocks on page for standard business hours
// make dynamically in js
// method to generate all the tables

function generateTable() {
    var tableEl = $("<div>");

    $.each(workHours, function (i) {
        console.log(i) + " " + workHours[i];
        // in each row, display hour, textarea for event, & save btn
        
        //table row
        var tableRowEl = $("<div>").addClass("time-block").attr("class", "row");
        
        // create td to hold time and enter time from workHours[i]
        var hourEl = $("<div>").attr("class", "hour").text(workHours[i]);
        var eventEl = $("<textarea>").attr("class", "description").text(workHours[i]);
        //var saveBtn = $("<button>").attr("class", "saveBtn").text(workHours[i]);
        //append the hourEl to table row
        $(tableRowEl).append(hourEl);
        //append the table row to the table
        $(tableEl).append(tableRowEl);
        
        





    });



    // append the table to the container
    $(".container").append(tableEl);
}


// 

//color code time blocks for past, present, future
// use moment to check time and set attr for time block to match color based on time
// for loop to check time for each individual time block
// if statement to set attr(background color) for time block to match color based on time


//click time block to enter event
// create on click event to allow input


//click save button to save event in local storage
// on click for save btn and add onclick event to save to local storage


// test to make sure on page reload event stays












// create an empty array to store data from textarea
//var userData = [];
//
////create a new div for table to hold columns of hour, description, & save button
//var tableEl = $("<div>");
//// make a variable for row? new row every hour?
//
//var hour = $("<div>").text(moment().format("h, A"));
//var event = $("<textarea>").addClass("description")
//
////variable for button, need to save description
//var saveEvent = $("<button>");
//
//// create a for loop to make rows for hour, description & save btn (look into .each())
//// append rows to tableEL
//for (var i =0; i < 9; i++);