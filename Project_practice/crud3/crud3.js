fetch('http://localhost:3000/employees')
.then(response=>response.json()).then((data)=>{
    data.map((key)=>document.getElementById('root').innerHTML+= `<tr>
    <td>${key.name}</td>
    <td>${key.Salary}</td>
    <td>${key.designation}</td>
</tr>` )

}).catch((error)=>{console.log("error-->",error)})


//post method

function postdata() {

    let nameaadd = document.getElementById("namepost").value
    // console.log(nameaadd)
let salaryadd = document.getElementById("salarypost").value
let  designationadd = document.getElementById("designationpost").value

let options = {
    method: 'POST',
    body: JSON.stringify({
      name: nameaadd ,
      Salary: salaryadd,
      designation: designationadd,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  }

  fetch('http://localhost:3000/employees', options)
  .then((response) => response.json())
  .then((json) => console.log(json))
  ;
}


//delete method

// function deletedata() {
//   let options1 = {
//     method: 'DELETE',
//     body: JSON.stringify({
//       name: "mostafa" ,
//       Salary: "130000",
//       designation: "tester"
//     }),
//     headers: {
//       'Content-type': 'application/json',
//     },
//   }

//   fetch('http://localhost:3000/employees', options1)
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   ;
// }