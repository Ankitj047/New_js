//delete all occurrence of element in given array (ek particular number delete krne ke liye)
var arr = [23, 34, 56, 78, 9, 1, 2, 4, 76];
function deleteelement(arr, ele) {
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] == ele) {
      arr.splice(i, 1);
    }
  }
  console.log(arr);
}
arr = deleteelement(arr, 78);

// find largest number in arr

var newarr = [123, 456, 678, 789];
var largest = newarr[0];
for (i = 0; i < newarr.length; i++) {
  largest = newarr[i] > largest ? newarr[i] : largest;
}
console.log(largest);

// merge two sorted array

var arr = [2, 1, 3, 5, 4, 7, 6];
var arr1 = [2, 1, 3, 5, 4, 7, 6];
var arr2 = arr.sort();
var arr3 = arr1.sort();
var arr4 = arr2.concat(arr3);
console.log(arr4);


//swap two numbers without using a temp variable

var x = 10
var y = 15

let z = x+y;

let a = z-x
let b = z-y

console.log(a,b)