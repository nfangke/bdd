//Business Logic
var pigLatin = function(userInput) {

  var userInputArray = userInput.split("");


  var vowelArray = ["a", "e", "i", "o", "u"];

  for (j = 0; j < vowelArray.length; j++) {
    if (vowelArray[j] === userInputArray[0]){
      userInputArray.push("ay");
      console.log(userInputArray);
      var pigLatinWord = userInputArray.join("");
      console.log(pigLatinWord);
      return pigLatinWord;
      }
    };

    if (userInputArray[0] === "q" || userInputArray[0] === "Q") {
        var qArray = userInputArray.splice(0, (userInputArray.length - 3));
        var qWordArray = userInputArray.concat(qArray);
        qWordArray.push("ay");
        var qWord = qWordArray.join("");

      } else if (userInputArray[1] === "q" || userInputArray[1] === "Q") {
        var newArray = userInputArray.splice(3, (userInputArray.length - 3));
        var squWordArray = newArray.concat(userInputArray);
        squWordArray.push("ay");
        var squWord = squWordArray.join("");
        console.log(squWord);
      } else {

    for(i = 1; i < userInputArray.length; i++) {



      var userCheck = userInputArray[i];
      for(k = 0; k < vowelArray.length; k++){
        if (userCheck === vowelArray[k]){
          var newArray = userInputArray.splice(i, (userInputArray.length - i))
          var pigWord = newArray.concat(userInputArray);
          pigWord.push("ay");
          var word = pigWord.join("");
          console.log(word);
        }
        }
      };
    };

  };

  // if ((userInputArray[0] = "a") || (userInputArray[0] = "e") || (userInputArray[0] = "i") || (userInputArray[0] = "o") || (userInputArray[0] = "u")) {
  //     userInputArray.push("ay");
  //     var pigLatinWord = userInputArray.join("");
  //     return pigLatinWord;
  // } else {alert("hi");}





//
// }


//UI Logic
$(document).ready(function(){

  $("form").submit(function(event){

    event.preventDefault();

    var userInput = $("#pig_value").val();

    var results = pigLatin(userInput);
    alert(results);

  });
});
