// create function called ageCategory and function is trigged when button is click
// get input from user 
// if input is empty show error message
// else print the display 

var age = document.getElementById("age");
var error = document.getElementById("error");
var display = document.getElementById("display");

function ageCategory(){
      if (age.value === "" || age.value < 0){
        display.innerHTML= " "
        error.innerHTML = " Enter valid age"
      }
      else if( age.value >= 0 && age.value <=12) {
        error.innerHTML = ""
        display.innerHTML = " Your are child"
      }
      else if( age.value >= 13 && age.value <=19) {
        error.innerHTML = ""
        display.innerHTML = " Your are Teenager"
      }
      else if( age.value >= 20 && age.value <=64) {
        error.innerHTML = ""
        display.innerHTML = " Your are Adult"
      }
      else if ( age.value >= 65) {
        error.innerHTML = ""
        display.innerHTML = " Your are Senior"
      }
}