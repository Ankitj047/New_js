fetch('./student.json')
  .then(response => response.json())
  .then((data) => {
    console.log(data)
    for (var parentIndex in data) {
      document.write(`Hello my name is <strong>${data[parentIndex].name}</strong> && my age is <strong>${data[parentIndex].age}</strong> & I'm belongs from ${data[parentIndex].city} city`)
    //   console.log(`data[parentIndex].country`, JSON.stringify(data[parentIndex].country[0].name))
      for (var childIndex in data[parentIndex]) {
        console.log("childIndex", childIndex)
        document.write(`I'm from this countries ${data[parentIndex].country[childIndex].name}`)
      }
      document.write('------ </br>')
    }

    //     // Parent Loop
    data.forEach((parentValue) => {
      document.write(`Hello my name is <strong>${parentValue.name}</strong> && my age is <strong>${parentValue.age}</strong> & I'm belongs from ${parentValue.city} city <br>`)
      document.write(`I'm belongs from below countries <br>`)

      // Child Loop
      parentValue.country.forEach((country) => {
        document.write(`<li> ${country.name} </li>`)
      })
      document.write(`------ <br>`)
    })

  })
  .catch(error => console.error(`Can't Fetch Data ${error}`));


  /**
 * POST METHOD
 */

// Default GET methods

// Method -- HTTP METHOD
// Body -- Data need to send at Backend Server
// Header -- Data type 

// let options = {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'Ankit Varia',
//       body: 'Sr. Software Developer',
//       userId: 24,
//     }),
//     headers: {
//       'Content-type': 'application/json',
//     },
//   }

//   fetch('./student.json/posts', options)
//   .then((response) => response.json())
//   .then((json) => console.log(json));


//   /**
//  * PUT Method
//  */

// let options1 = {
//   method: 'PUT',
//   body: JSON.stringify({
//     title: 'Ankit Varia',
//     body: 'Sr. Software Developer',
//     userId: 24
//   }),
//   headers: {
//     'Content-type': 'application/json',
//   },
// }
