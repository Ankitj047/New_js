// function add (x,y,z){
//     console.log(x+y+z)
// }

// add(12,13,14)


// rest parameter ka output array hota he, funtion ki values ko array me change kr deta he

function hello (...x){
console.log(x)
}

hello(12,23,34)

// spread operator   - 2 qrrays ko add krne ke liye use me ata he

let arr1 = [1,2,3]

let arr2 = [2,3,4,...arr1]

console.log(arr2)