//airthmatic    + - / * ++ -- **
// assigment =  +=  -=  /=  *=  **=
//string  +
// type - typeof, instanceof
//comparision == === > < => =< ? != !==  its reture boolean (true, false)
//logical && || !
//bitwise  &  |  ~  ^ <<  >> 



//airthmatic
var x = 10;
var y = 20
var z =30

console.log(x+y);
console.log(x-y);
console.log(x/y);
console.log(x*y);

console.log(x++)  //post increment

++z
console.log(z) // pre increment

//Assigment

var a=10

var a=a+2
console.log(a)

var b=2
b+=10;
console.log(b)  //Important


//comparision

var marks = 70
var result = (marks>60)?"first":"second"
console.log(result)

// logical
var age = 60
var child = 3
var res= (age>55 && child>3)  // and 
var res1 = (age>55 || child>3)  // or
var c = true // not opposite return
console.log(res)
console.log(res1)
console.log(!c)