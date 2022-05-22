var x = "ankit jain is studing and practicing";
var y = "he is working hard"
console.log(typeof(x))  //type
console.log(x.length)// lenght of string
console.log(x.search("is")) // string exist on which number  -1 means does not exist
console.log(x.slice(10,14))  //from where to where
console.log(x.substring(10,14))// slice can be work with -ve number but substring can not   
console.log(x.replace("ankit","amit"))// for replace
console.log(x.toLowerCase())  // change string to lower case
console.log(x.toUpperCase()) // change string to upper case
console.log(x.concat(y)) // for adding two string