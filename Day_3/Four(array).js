var name = ["ankit", "amit","ajay"]
console.log(name)

var x = new Array("ankit", "amit","ajay")
console.log(x)

console.log(name[0])// find index number element

for (var i=0; i<3;i++){
    console.log(name[i])
}

//------multidimension array----------//

var multidimension = [
    ["ankit", "jain"],      // 0 index
    ["amit","jhavar"],      // 1 index
    ["jay","pandya"]        // 2 index
]

console.log(multidimension[0][1])