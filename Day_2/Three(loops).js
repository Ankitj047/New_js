// for loop 
// while loop 
// do while loop 
// for each loop
// for in loop


// for loop


// for (var x=0;x<5;x++){
//     console.log(x+"Ankit")
//     }
    

//     // while

//     var y = 0;

//     while(y<5){
//         console.log(y+"jain")
//  y++   }


// for (var y=0;y<10;y++){
//     if (y==5){
//         console.log(y+"*")
//     }
//     else{
//     console.log(y)
// }}


//forEach   used for get data in arr
 
var arr = ["ankit", "amit","ajay"]

arr.forEach(function(val, index){
    console.log(val, index)})


    // forin     used for object

    var obj= {
        name:"ankit",
        age: 26,
        mob:999
    }

    for (var key in obj){
        console.log(key, obj[key])
    }