fetch('./student.json')
.then(response=>response.json()).then((data)=>{


    // data.map((key)=>document.write(key.country.map((key2)=>document.write(key2.countryname))))

    data.map((key)=>document.getElementById('root').innerHTML+= `<tr>
    <td>${key.name}</td>
    <td>${key.age}</td>
    <td>${key.city}</td>
    <td>${key.country.map((data)=>{(data.countryname)})}</td>
</tr>` )

}).catch((error)=>{console.log("error-->",error)})


//post method

function postdata() {

let options = {
    method: 'POST',
    body: JSON.stringify({
      name: 'Ajay Jain',
    }),
    headers: {
      'Content-type': 'application/json',
    },
  }

  fetch('https://jsonplaceholder.typicode.com/posts', options)
  .then((response) => response.json())
  .then((json) => console.log(json));
}