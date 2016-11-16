//Purpose: reverses words with 5 letters or more within a string
//Signature: (str) -> 5 letter-or-more words reversed
//Examples: ("Hi there neighbor") -> "Hi ereht robhgien"
//          ("hello guy") -> "olleh guy"
//          ("wow i think you are cool") -> "wow i kniht you are cool"

function reverseStr(){
  var str = prompt("Type in some words, and all words over 5 characters will be reversed!");
  var indexcount = 0;
  var counter = 0;
  var words = str.split(" ");
  console.log(words);
  var indexNum = words.length;
  console.log(indexNum);
  var newArray = [];
  while(counter < indexNum){
    if(words[counter].length >= 5){
      var x = words[counter].split("").reverse().join("");
      newArray.concat(x);
    }
    else {
      console.log(words[counter]);
    }
    counter ++;

  }
}


var x = "hello guy"
x.split(" ")
x[0];


words[0].split("").reverse().join("");


words[0].length;
