var saveBtn = $(".btn")



$(function () {
  // adds current date and time to app. HH makes sure it's in 24 hour time
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D YYYY, HH:mm:ss'));

  // stores current hour into variable to be compared to time blocks
  var now = dayjs().hour();
  console.log(now); // checking to see if current hour is displayed 

  // grabs all elements with class name time-block 

  $(".time-block").each(function () {
    var timeBlockHour=(this.id);  //targets id of each element in that class


    // checks to see if time block hour is past, present, or future
    // and adds corresponding class
    if(timeBlockHour < now) {
      $(this).addClass("past");
    } else if(timeBlockHour == now) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }

  })
}) 

saveBtn.on("click", saveUserInput);
// TODO need to figure out how to condense these funtions
// so I don't repeat myself, maybe for loop 

//sets local storage key value pairs
function saveUserInput () {

  localStorage.setItem('9AM', $('#hour9').val());
  localStorage.setItem('10AM', $('#hour10').val());
  localStorage.setItem('11AM', $('#hour11').val());
  localStorage.setItem('12PM', $('#hour12').val());
  localStorage.setItem('1PM', $('#hour13').val());
  localStorage.setItem('2PM', $('#hour14').val());
  localStorage.setItem('3PM', $('#hour15').val());
  localStorage.setItem('4PM', $('#hour16').val());
  localStorage.setItem('5PM', $('#hour17').val())
}


// stores user input into a variable
var hour9 = $("#hour9").text();
var hour10 = $("#hour10").text();
var hour11 = $("#hour11").text();
var hour12 = $("#hour12").text();
var hour13 = $("#hour13").text();
var hour14 = $("#hour14").text();
var hour15 = $("#hour15").text();
var hour16 = $("#hour16").text();
var hour17 = $("#hour17").text();


// if there is content in local storage this will display in 
//correct time box el
$("#hour9").html(localStorage.getItem("9AM"));
$("#hour10").html(localStorage.getItem("10AM"));
$("#hour11").html(localStorage.getItem("11AM"));
$("#hour12").html(localStorage.getItem("12PM"));
$("#hour13").html(localStorage.getItem("1PM"));
$("#hour14").html(localStorage.getItem("2PM"));
$("#hour15").html(localStorage.getItem("3PM"));
$("#hour16").html(localStorage.getItem("4PM"));
$("#hour17").html(localStorage.getItem("5PM"));
