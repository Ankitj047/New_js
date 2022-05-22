function addNumber(x,y){
    console.log(x+y)
}
addNumber(10,20)


function sumNumber (a,b){
    return(a+b)   //return use when we need to reuse the output
}

var sum = sumNumber(5,6)
console.log(sum+10)

//annonymous function
var f = function (){
var s= 10;
var g = 23;
console.log(s+g);
};

f();