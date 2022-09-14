// The current day is displayed at the top of the calendar when the planner is opened using moment.js
// I am presented with timeblocks for standard business hours
// When you view the time blocks for that day, each time block is color coded to indicate whether it is in the past, present, or future
// When you click on the save button for that time slot, the text for that event is saved in local storage
// When the page is refreshed, the saved events persist


var currentDay = moment().format('dddd, MMMM Do YYYY');     // current day
var currentHour = moment().format('H');                     // current hour
var currentMinute = moment().format('mm');                  // current minute

$("#currentDay").text(currentDay + " " + currentHour + ":" + currentMinute);        // display current day