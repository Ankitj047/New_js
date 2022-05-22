let arr = ["ankit","ajay","amit"]

// from normal function

// for (var i=0;i<arr.length;i++){
// console.log(arr[i])
// }

// console.log(arr[0])
// for in loop for key
// for (key in arr){
//     console.log(arr[key])
// }


// for in loop for string
// let str = "my name is ankit"

// for (key in str){
//     console.log(str[key])
// }


// for in loop for object

let obj  = {
    name:"ankit",
    age:20,
    class:"ms"
}

for (key in obj){
    console.log([key])
    console.log(obj[key])
}