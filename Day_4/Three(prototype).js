//constructor ke function me new key add krne ke liye


function User (fn,ln){
 this.fname=fn,
 this.lname=ln
}

User.prototype.age = 10

var obj1 = new User ("ankit", "jain")

console.log(obj1)