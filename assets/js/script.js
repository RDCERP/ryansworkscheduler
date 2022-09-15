// The current day is displayed at the top of the calendar when the planner is opened using moment.js
// I am presented with timeblocks for standard business hours
// When you view the time blocks for that day, each time block is color coded to indicate whether it is in the past, present, or future
// When you click on the save button for that time slot, the text for that event is saved in local storage
// When the page is refreshed, the saved events persist

$(document).ready(function(){

// The current day is displayed at the top of the calendar when the planner is opened using moment.js
    var now = moment();                         // current time
    $("#currentDay").text(now);                 // display current time   
        setInterval(function () {               // update time every second
        now = moment();                         
        $("#currentDay").text(now);
        } , 1000);

// I am presented with timeblocks for standard business hours
    var timeBlocks = [9, 10, 11, 12, 13, 14, 15, 16, 17];   // time blocks
    var timeBlock = $(".time-block");                       // time block class
    var timeBlockHour = $(".hour");                         // hour class
    var timeBlockText = $(".description");                  // description class
    var timeBlockSave = $(".saveBtn");                      // save button class

// When you view the time blocks for that day, each time block is color coded to indicate whether it is in the past, present, or future
    function colorCode() {
        for (var i = 0; i < timeBlocks.length; i++) {               // loop through time blocks
            var timeBlockHour = timeBlocks[i];                      // time block hour
            var timeBlockText = $("#description-" + timeBlockHour);                      // time block text
            var timeBlockSave = timeBlocks[i];                      // time block save button
            if (timeBlocks[i] < now.hour()) {                       // if time block hour is less than current hour
                $(timeBlockText).addClass("past");                      // add past class
            } else if (timeBlocks[i] === now.hour()) {              // if time block hour is equal to current hour
                $(timeBlockText).addClass("present");                   // add present class
            } else {                                                // if time block hour is greater than current hour
                $(timeBlockText).addClass("future");                    // add future class
            }
        }
    }
    colorCode();

// When you click on the save button for that time slot, the tex t for that event is saved in local storage usin JSON.stringify
    $(timeBlockSave).on('click', function() {  
        var timeBlockHour=($(this).attr("id").split("-")[1]);                           // get id of save button));                                                
        var timeBlockText = $("#description-" + timeBlockHour).val();                   // time block text        
        localStorage.setItem(timeBlockHour, JSON.stringify(timeBlockText));          // save time block hour and text to local storage
    });

        
// When the page is refreshed, the saved events persist using JSON.parse
    function loadText() {                                                               // load text from local storage
        for (var i = 0; i < timeBlocks.length; i++) {                                   // loop through time blocks
            var timeBlockHour = timeBlocks[i];                                          // time block hour
            var timeBlockText = $("#description-" + timeBlockHour)                                         // time block text
            var savedText = JSON.parse(localStorage.getItem(timeBlockHour));            // get saved text from local storage
            $(timeBlockText).val(savedText);                                            // display saved text
        }   
    }
    loadText();
    
    // $("#hour-9 .description").val(localStorage.getItem(".description"));

    // $(document).ready(function() {
    //     var timeBlockText = $(".description");
    //     var timeBlockHour = $(".hour");
    //     var timeBlockSave = $(".saveBtn");
     
    //     $(timeBlockSave).on('click', function() {
    //       alert('clicked');
    //       var value = $(timeBlockText).val();
    //       localStorage.setItem('description-9', value);
    //       alert("Task saved!");
    //     });
    //   });

    });
 