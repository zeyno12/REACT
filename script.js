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
    const wp="melumat yoxdur";
    data.innerHTML=wp;

}
else {
    data.innerHTML +=`
    <div class="data">
    <div class="picture">   
        <img src="${imagevalue}" alt="${namevalue}">
    </div>
    <h3>${namevalue}</h3>
    <p>${titlevalue}</p>
           </div>
    `;
}
}

submitbtn.addEventListener("click", additem);