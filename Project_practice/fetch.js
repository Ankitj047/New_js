let allMethod = [];
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    }).then((result) => {
        allMethod = result;
        for (i in allMethod) {
            document.getElementById("result").innerHTML += (`<tr><td>${allMethod[i].name}</td>
       <td>${allMethod[i].username}</td>
       <td>${allMethod[i].email}</td>
        <td>${allMethod[i].address.city}</td></tr>`)
        }
        console.log(allMethod);
    }).catch((error) => {
        console.error(error);
    })


    
function sort() {
    allMethod.sort(function (a, b) {
        var texta = a.name.toUpperCase();
        var textb = b.name.toUpperCase();
        return (texta < textb) ? -1 : (a > b) ? 1 : 0

    })
    document.getElementById("result").innerHTML = "";
    for (i in allMethod) {

        document.getElementById("result").innerHTML += (`<tr><td>${allMethod[i].name}</td>
                                                                 <td>${allMethod[i].username}</td>
                                                                 <td>${allMethod[i].email}</td>
                                                                 <td>${allMethod[i].address.city}</td></tr>`);
    }
    console.log(allMethod);
}


function reverse() {
    allMethod.reverse(function (a, b) {
        var texta = a.name.toUpperCase();
        var textb = b.name.toUpperCase();
        return (texta < textb) ? -1 : (a > b) ? 1 : 0

    })
    document.getElementById("result").innerHTML = "";
    for (i in allMethod) {

        document.getElementById("result").innerHTML += (`<tr><td>${allMethod[i].name}</td>
                                                                 <td>${allMethod[i].username}</td>
                                                                 <td>${allMethod[i].email}</td>
                                                                 <td>${allMethod[i].address.city}</td></tr>`);
    }
    console.log(allMethod);
}



function pop() {
    // allMethod.reverse(function (a, b) {
    //     var texta = a.name.toUpperCase();
    //     var textb = b.name.toUpperCase();
    //     return (texta < textb) ? -1 : (a > b) ? 1 : 0

    // })
    allMethod.pop([
        {
            name:"Abhishek",
            age:26,
            Eduction:"BE-Mechanical",
            city:"Pune"
        }])
    document.getElementById("result").innerHTML = "";
    for (i in allMethod) {

        document.getElementById("result").innerHTML += (`<tr><td>${allMethod[i].name}</td>
                                                                 <td>${allMethod[i].username}</td>
                                                                 <td>${allMethod[i].email}</td>
                                                                 <td>${allMethod[i].address.city}</td></tr>`);
    }
    console.log(allMethod);
}




// function push() {
//     // allMethod.reverse(function (a, b) {
//     //     var texta = a.name.toUpperCase();
//     //     var textb = b.name.toUpperCase();
//     //     return (texta < textb) ? -1 : (a > b) ? 1 : 0

//     // })
//     allMethod.every((checkid)=>{return id==1})
//         console.log()
//     document.getElementById("result").innerHTML = "";
//     for (i in allMethod) {

//         document.getElementById("result").innerHTML += (`<tr><td>${allMethod[i].name}</td>
//                                                                  <td>${allMethod[i].username}</td>
//                                                                  <td>${allMethod[i].email}</td>
//                                                                  <td>${allMethod[i].address.city}</td></tr>`);
//     }
//     console.log(allMethod);
// }