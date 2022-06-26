//reverse str

function reverseString(str) {
  // console.log(str.split("").reverse().join("")    ) ;
  var a = str.split("");
  var arr = a.reverse();
  var join = arr.join("");
  console.log(join);
}
reverseString("Hello World how is it outside");
// var check = reverseString("madam");
// var checkc = "madam1";

// if (check == checkc) {
//   console.log("right");
// } else {
//   console.log("wrong");
// }


// with the help of loop

// const str = "madam"

// const length = str.length

// for (i=0;i<length/2;i++){
//     if(str[i] !== str[length-1-i] ){
//      }
// }

// console.log("not a pallindrom")


// count characters in word javascript

function characte(str) {
  var arr = str.split("");

  for (i = 0; i <= arr.length; i++) {
    var sum = 0;

    sum += i;
  }
  console.log(sum);
}

characte("ankit");
