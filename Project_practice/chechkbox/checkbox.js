function checkall () {
// let data = document.getElementById("city")
let data = document.querySelectorAll("#city")
// console.log(data)
// //  let datalen = data.length;
//  console.log(data.length)
for (i=0;i<= data.length;i++){
    // console.log(data[i].checked)
    data[i].checked=true
}
data.checked = true
}


function  uncheckall() {
    let data = document.querySelectorAll("#city")
    for (i=0;i<= data.length;i++){
        data[i].checked = false
    }
}