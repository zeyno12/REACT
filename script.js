const inputname=document.getElementById("name");
const inputsurname=document.getElementById("surname");
const inputimage=document.getElementById("image");
const inputtitle=document.getElementById("title");
const inputemail=document.getElementById("email");
const inputnumber=document.getElementById("number");

const submitbtn=document.querySelector(".btn")
function additem(e){
    e.preventDefault();
const namevalue=inputname.value;
const surnamevalue=inputsurname.value;
const imagevalue=inputimage.value;
const titlevalue=inputtitle.value;
const emailvalue=inputemail.value;
const numbervalue=inputnumber.value;
const data=document.querySelector(".data")
// let age =Number(prompt ("what are age?"));
// if(age>=18){

//     alert(welcome); 
// }
// else{
//     alert(bye);
// }
if(namevalue.trim()==="", surnamevalue.trim()==="", imagevalue.trim()==="", titlevalue.trim()==="", emailvalue.trim()==="", numbervalue.trim()===""){
    const salam="melumat yoxdur";
    hello.innerHTML=salam;

}
else {
    data.innerHTML +=`
    
    <div class="picture">   
        <img src="${imagevalue}" alt="${namevalue}">
    </div>
    <h3>${namevalue}</h3>
    <p>${titlevalue}</p>
        
    `;
}
}
const numberbtn=document.querySelector(".btn");
if(numberbtn){
    numberbtn.addEventListener("click",(e)=>{
        e.preventDefault();
        const value=document.querySelector("#name").value
        const value1=document.querySelector("#surname").value
        const value2=document.querySelector("#image").value
        const value3=document.querySelector("#title").value
        const value4=document.querySelector("#email").value
        const value5=document.querySelector("#number").value
        const li=document.createElement("li")
        li.textContent=value
        const list=document.querySelector("#list")
        list.appendChild(li)
    })
}

submitbtn.addEventListener("click", additem);