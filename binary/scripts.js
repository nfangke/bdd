//Business Logic

//
// var resultArray = [];
// var binaryBytes = [128, 64, 32, 16, 8, 4, 2, 1]
//
//   for (index = 0; index < binaryBytes.length; index++) {
//     if (binaryBytes[index] <= userInput) {
//       resultArray.push("1");
//       userInput = userInput - binaryBytes[index];
//     } else {
//       resultArray.push("0");
//     }
//
//   };
//
//       var result = parseInt(resultArray.join(""));
//       alert(result);
// };


var binaryCalc = function(userInput) {

  var resultArray = [];

  var hexadecimal = [Math.pow(16, 4), Math.pow(16, 3), Math.pow(16, 2), Math.pow(16, 1), Math.pow(16, 0)]

  var hexadecimalValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

  for (i = 0; i < hexadecimal.length; i++){

    if(parseInt(hexadecimal[i]) <= userInput){



      for(j=0; j <= 10; j++){
        value = parseInt(userInput/hexadecimal[i]);
          console.log(value);
        if(value === parseInt(hexadecimalValues[j])){
          resultArray.push(value);
          value = (userInput % value) + hexadecimal[j+1] ;
        }
      }


      for(k = 11; k <= 16; k++){
        if(value === k) {
          console.log(hexadecimalValues[k]);
          resultArray.push(hexadecimalValues[k]);
          userInput = userInput % value;
          resultArray.push(userInput);
        }
      }

    }
  }
  console.log(resultArray);

};


//UI Logic
$(document).ready(function() {
  var userInput = parseInt(prompt("Convert this number to binary:"));
  binaryCalc(userInput);


});
