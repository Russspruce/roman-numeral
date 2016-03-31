$(document).ready(function() {
  $("#translate").submit(function(event) {
   event.preventDefault();
   var numberInput = $("#numberInput").val();
   var romanOne = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
   var romanTen =['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
   var romanHundred = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
   var romanThousand = ['', 'M', 'MM', 'MMM'];
   var romanArrays =[romanOne, romanTen, romanHundred, romanThousand];
   var finalNumber = [];



    if (1 <= numberInput && numberInput <= 3999) {
      var romanAlter = numberInput.split("").reverse();
     for (i = 0; i < romanAlter.length; i++) {
       var romanDigit = romanArrays[i][parseInt(romanAlter[i])];
       finalNumber.push(romanDigit);
     }
     alert(finalNumber.reverse().join(""));
    }
    else if ( 0 >= numberInput || numberInput >= 4000) {
      alert("ERR0R");
    }
 });
});
