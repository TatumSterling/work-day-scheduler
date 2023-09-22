// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.







$(function () {
// adds current date and time to app. HH makes sure it's in 24 hour time
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D YYYY, HH:mm:ss'));

  // stores current hour into variable to be compared to time blocks
  var currentHour = dayjs().hour();
  console.log(currentHour); // checking to see if current hour is displayed 

  //grabs all elements with class name time-block 
  var timeBlockEl = $(".time-block");
  console.log(timeBlockEl[0].id); // checking to see if I could access id tags with index

  // for each time-block class, will check for id 
  for (var i = 0; i < timeBlockEl.length; i++) {
    var timeBlockTime = timeBlockEl[i].id;
    console.log(timeBlockTime); // checking to see if variable displayed all elements as expected

    if (timeBlockTime < currentHour) {
      timeBlockEl.addClass("past") // checks to see if time is less than current time meaning its in past
    } else if (timeBlockTime === currentHour) {
      timeBlockEl.addClass("present"); // checks to see if time is current meaning present
    } else {
      timeBlockEl.addClass("future");// checks to see if time is greater than current time meaning its in future
    }
  }



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
