// The current day is displayed at the top of the calendar when the planner is opened using moment.js
// I am presented with timeblocks for standard business hours
// When you view the time blocks for that day, each time block is color coded to indicate whether it is in the past, present, or future
// When you click on the save button for that time slot, the text for that event is saved in local storage
// When the page is refreshed, the saved events persist

let timeBlocks = $(".time-block");      // time blocks
let saveBtn = $(".saveBtn");            // save buttons
let textArea = $(".description");       // text areas
let time = $(".hour");                  // hours
let timeArray = [];                     // array of hours
let textArray = [];                     // array of text areas
let timeBlockArray = [];                // array of time blocks
let timeBlockHourArray = [];            // array of time block hours

$(document).ready(function () {

    var now = moment();                         // current time
    $("#currentDay").text(now);                 // display current time   
        setInterval(function () {               // update time every second
        now = moment();
        $("#currentDay").text(now);
        } , 1000);

    $(".saveBtn").on("click", function () {                   // save button click event
        let text = $(this).siblings(".description").val();    // get text area value
        let time = $(this).parent().attr("id");               // get time block id
        localStorage.setItem(text, JSON.stringify(text));  // save text and time to local storage            
        // save text area value to local storage
        alert("Saved!");                                      // alert user that text area value was saved
    });
    // get time blocks

        // loop through time blocks
        for (let i = 0; i < timeBlocks.length; i++) {
    
            // push time blocks to array
            timeBlockArray.push(timeBlocks[i]);
    
            // push time block hours to array
            timeBlockHour.push(timeBlockArray[i].children[0].innerText);
    
            // push time block hours to array
            timeBlockHourArray.push(timeBlockHour[i].slice(0, 2));
    
            // push text areas to array
            textArray.push(textArea[i]);
    
            // push save buttons to array
            saveArray.push(saveBtn[i]);
    
            // push hours to array
            timeArray.push(time[i]);
    
            // push hours to array
            timeArray.push(time[i]);
            // console.log(timeArray);
       } });



    





