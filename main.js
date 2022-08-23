// need an array 
let personUser = [
    {
    name: "Emily",
    age: "18",
    job: "student", 
},
]; 

//need a function

function update(){
    let body = document.querySelector("body")

    //make element 
    let personInfo = dpcument.createElement("div"); 
    personInfo.innerHTM = 
    <p>${person.name}</p>
    <p>${person.age}</p>
    <p>${person.job}</p>

    //combine logic 
    body.appendChild(personInfo); 

    //repeat 
    personUser.forEach((person) => {
        update(person)
    }); 
}; 






//need a function to repeat the other function