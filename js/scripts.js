// Business Logic
var leapYear = function(userInput) {
  if (((userInput % 4 === 0) && (userInput % 100 != 0)) || (userInput % 400 === 0)) {
    return true;
  } else {
  return false;
  }
};


// UI Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("#leap_value").val());

    if (userInput > 0) {
        if (leapYear(userInput) === true) {
        alert("YES!");
      } else {
        alert("Not a leap year");
      }

    } else { alert("Not a year");
    }


  });
});
