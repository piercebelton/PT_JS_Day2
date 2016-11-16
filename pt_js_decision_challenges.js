//Purpose: Tests two numbers to determine which is greater
//Signature: (int, int) -> greater integer
//Examples: (3, 5) -> 5
//         (2, 10) -> 10
//         (12, 30) -> 30

function greaterNum() {
  var a = parseInt(prompt("Enter first number"));
  var b = parseInt(prompt("Enter second number"));
  if (a > b) {
  alert (a + " is greater.");
  }
  else {
  alert (b + " is greater.");
  }
}


//Purpose: Translates "Hello World" to languages based on input lang code
//Signature (lang) -> Hello World in that language
//Examples: (english) -> Hello World
//          (spanish) -> Hola Mundo
//          (romanian) -> Salut Lume

function transHello(){
  var lang = prompt("Enter Language, either english, spanish, or romanian");
  if(lang === "spanish"){
    alert ("Hola Mundo!");
  }
  else if(lang === "romanian"){
    alert ("Salut Lume!");
  }else{
    alert ("Hello World!");
  }
}


//Purpose: Give letter grade based on number
//Signature: (int) -> string
//Examples: (57) -> F
//          (84) -> B
//          (71) -> C

function assignGrade() {
  var grade = parseInt(prompt("Enter number grade"));
  if(grade >= 90) {
    alert("A")
  }
  else if(grade >=80 && grade <=89) {
    alert("B")
  }
  else if(grade >=70 && grade <=79) {
    alert("C")
  }
  else if(grade >=60 && grade <=69) {
    alert("D")
  }
  else{
    alert("F")
  }
}


//Purpose: Takes a noun and pluralizes it if necessary
//Signature: (int, str) -> int + string(pluralized if necessary)
//Examples: (5, dog) -> "5 dogs"
//          (12, cat) -> "12 cats"
//          (1, lion) -> "1 lion"

function pluralize(){
  var num = parseInt(prompt("Enter a number"));
  var beast = prompt("Enter a noun");
  if(num > 1){
    alert(num + " " + beast + "s");
  }
  else{
    alert(num + " " + beast);
  }
}


//Purpose: Prints numbers from 0 to 15 and states whether it is odd or even
//Signature: () -> numbers 0-15 & "is odd" or "is even"
//Examples: "0 is even"
//          "1 is odd"
//          "2 is even"

function printNums() {
  var num = 0
    while ( num <=15 ) {
      if(num % 2 === 0) {
        console.log(num + " is even");
      }
      else {
        console.log(num + " is odd");
      }
        num += 1;
    }
}

function loop(){
  var x = 0
  while(x > 10){
    console.log("This is a loop, number " + x)
    x ++;}
  }

//Purpose Prints numbers 1-100, puts fizz instead of 3's, Buzz instead of 5's, and FizzBuzz for multiples of 15
//Signature: () -> see above
//Examples: "1, 2, Fizz, 4, Buzz"
//          "Fizz, 13, 14, FizzBuzz"

function fizzBuzz() {
  var x = 1
  while (x <= 100) {
    if (x % 15 === 0) {
      console.log("FizzBuzz");
    }
    else if (x % 5 === 0) {
      console.log("Buzz");
    }
    else if (x % 3 === 0) {
      console.log("Fizz");
    }
    else {
      console.log(x);
    }
    x ++;
  }
}


















//poop




























// asiulrgh
