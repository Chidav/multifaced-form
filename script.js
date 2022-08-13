const perInfo = document.querySelector("#personalInfo")
const edInfo = document.querySelector("#educationalInfo")
const healthInfo = document.querySelector("#healthInfo")
const firstNextBtn = document.querySelector("#firstNextBtn")
const secondNextBtn = document.querySelector("#secondNextBtn")
const firstBackBtn = document.querySelector("#firstBackBtn")
const secondBackBtn = document.querySelector("#secondBackBtn")
const submitBtn = document.querySelector("#submitBtn")

function firstNext(){
    perInfo.style.display="none"
    edInfo.style.display="flex"
    healthInfo.style.display="none"
}
function secondNext(){
    edInfo.style.display="none"
    healthInfo.style.display="flex"

}
function firstBack(){
    perInfo.style.display="flex"
    edInfo.style.display="none"
}
function secondBack(){
    edInfo.style.display="flex"
    healthInfo.style.display="none"
}
function submit(){
    alert("Your data has been recorded successfully")
}


// function allLetter(lname)
// { 
// const letters = /^[A-Za-z]+$/;
// if(lname.value.match(letters) && lname.value !== '' && lname.value !== ' ')
// {
// return true;
// }
// else
// {
// alert('Lastname must have alphabet characters only and is required');
// lname.focus();
// return false;
// }
// }

// function allLetters(fname)
// { 
// const letters = /^[A-Za-z]+$/;
// if(fname.value.match(letters) && fname.value !== '' && fname.value !== ' ')
// {
// return true;
// }
// else
// {
// alert('Firstname must have alphabet characters only and is required');
// fname.focus();
// return false;
// }
// }

// function allnumeric(ag)
// { 
// if(ag.value !== '')
// {
// return true;
// }
// else
// {
// alert('Age is required');
// ag.focus();
// return false;
// }
// }

// function validateEmail(em)
// {
// const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// if(em.value.match(mailformat) && em.value !== '' && em.value !== ' ')
// {
// return true;
// }
// else
// {
// alert("You have entered an invalid email address!, email address is required");
// em.focus();
// return false;
// }
// }


// function validsex(msex,fsex)
// {
// x=0;

// if(msex.checked) 
// {
// x++;
// } if(fsex.checked)
// {
// x++; 
// }
// if(x==0)
// {
// alert('Select Male/Female');
// msex.focus();
// return false;
// }
// else
// {
// alert('Form complete, you can proceed to the next');
// return true;}
// }


// function firstValidation(){
// const lname = document.registration.lname;
// const fname = document.registration.fname;
// const em = document.registration.em;
// const ag = document.registration.ag;
// const msex = document.registration.msex;
// const fsex = document.registration.fsex; 
// if(allLetter(lname)){
//     if(allLetters(fname)){
//         if(validateEmail(em)){
//             if(allnumeric(ag)){
//                 if(validsex(msex,fsex)){
//                                         }
//                                 } 
//                             }
//                         } 
//                     }
// firstNext()
// }