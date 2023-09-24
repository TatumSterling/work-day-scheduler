// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.







$(function () {
  // adds current date and time to app. HH makes sure it's in 24 hour time
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D YYYY, HH:mm:ss'));

  // stores current hour into variable to be compared to time blocks
  var now = dayjs().hour();
  console.log(now); // checking to see if current hour is displayed 

  // grabs all elements with class name time-block 

  $(".time-block").each(function () {
    var timeBlockHour=(this.id);

    console.log(timeBlockHour)

    if(timeBlockHour < now) {
      $(this).addClass("past");
    } else if(timeBlockHour == now) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }

  })
}) 


// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
