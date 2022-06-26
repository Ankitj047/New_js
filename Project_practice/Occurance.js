//Count the occurrences of each element inside an array using reduce


//with help of usereduce
function countOccurrences(arr) {

    return arr.reduce(function(acc, curr) {
      if (acc[curr]) {
        acc[curr] += 1;
      } else {
        acc[curr] = 1
      }
      return acc;
  
    }, {})
  
  }
  
  console.log(countOccurrences(['a', 'b', 'c', 'b', 'a']));
  

//helo of loop

const myArray = [false, 24, "English", false, "english", 22, 19, false, "English", 19];

let counter = {};
for (element of myArray.flat()) {
    if (counter[element]) {
        counter[element] += 1;
    } else {
        counter[element] = 1;
    }
};
console.log(counter);