const content=document.querySelector("#content")



const submit=document.querySelector("#submit")





window.addEventListener("load", () => {





    getUsers();





})





submit.addEventListener('click', () =>{



    let fname=document.querySelector('#fname').value



    let lname=document.querySelector('#lname').value



    let email=document.querySelector('#email').value



    let gender=document.querySelector('#gender').value





    //object



    //{'fname': fname, 'lname': delacruz}



    let formData={fname,lname,email,gender}





    fetch("https://bscs2b-api-crud-d1j4.onrender.com/api/members", {



        method: "POST",



        body: JSON.stringify(formData),



        headers:{



            "Content-Type":"application/json"



        }





    }).catch((error)=> console.log(error))



    alert("Successfully inserted!")



    location.reload()



});





window.addEventListener("load", ()=>{



    getUsers();



})



function getUsers(){

    let html = ""



    //fetch("http://localhost:5001/api/members", {mode:"cors"})



    fetch("https://bscs2b-api-crud-d1j4.onrender.com/api/members", {mode:"cors"})



    .then((response) => {



    console.log(response)



    return response.json()

    })




    .then((data) => {

        data.forEach((element) => {

            html += `<li> ${(element.first_name)} ${(element.last_name)} <a href="javascript:void(0)" onClick="deleteMember(${element.id})"> DELETE</a> </li>`

        })

        content.innerHTML = html

    })



    .catch((error) => {

      console.log(error)

    })

}



function deleteMember(id){

    fetch('https://bscs2b-api-crud-d1j4.onrender.com/api/members',{

        method:'DELETE',

        body: JSON.stringify(formData),

        headers:{

            'Content-Type': 'application/json'

        }

    })
    .then(response => response.text())

    .then(response=>console.log(response))

    .catch(error=>console.log(error))

}
