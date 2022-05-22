// multiply arr to 2

var arr=[1,2,3,4,5]

// let data = arr.map(function(x){
// console.log(x*2)  ;     }
// )

 //fetch key from object


 var obj = [{"name" : "ankit", "class":"ms", "age":20},
 {"name" : "ajay", "class":"ms", "age":20},
 {"name" : "amit", "class":"ms", "age":20}
]

let arrvalue = obj.map((y)=>(console.log(y.name)))

//we can also use for in loop rather than map  

for (key in obj){
    console.log(obj[key].name)
}
