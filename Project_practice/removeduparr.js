var arr = [2,3,4,4,5,6,6,6,7,8]

// from loop
var remove = arr.sort ()

for(i=0;i<=remove.length;i++){
    if(remove[i]==remove[i+1]){
        remove.splice(i, 1)
    }
}

console.log(remove)

// from method

var unique = [...new Set(arr)]
console.log(unique)