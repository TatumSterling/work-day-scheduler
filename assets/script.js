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

//sets local storage key value pairs for each textarea element
function saveUserInput () {

  $("textarea").each(function() {
    var hour = $(this).attr("id");
    var task = $(this).val();

    localStorage.setItem(hour, task);
  })
}

//loops through index 9-17 and gets user input for each
// using the hour9-hour17 ID tags and stores them 
// in an object
var hours = {};


for (var i = 9; i <= 17; i++) {
  hours["hour" + i] = $("#hour" + i).text();
}

// loops through index 9-17 and retrieves from local storage if any
for(var i = 9; i<= 17; i++){
  $("#hour"+i).html(localStorage.getItem("hour"+i));
}

