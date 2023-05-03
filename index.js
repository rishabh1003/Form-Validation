let fnameb = false;
let lnameb = false;
let emailb = false;
let passwordb = false;
let cpasswordb = false;
let phonenumberb = false;
let radioSelected = false;
let mydob=false;
let addb=false;
let checkboxb=false;



const firstName = document.querySelector("#firstName");

function firstname() {
  let firstNameValue = firstName.value;
  let reg = /^(?=.{3,20})[a-zA-Z]*(.)(?!\1)(.)(?!\1|\2)[a-zA-Z]*/;
  let regex = /^[Xx] [Ææ] [Aa]-[12]$/;
  // let reg = /^(?=.{3,20})[a-zA-Z]*(.)(?!\1)(.)(?!\1|\2)[a-zA-Z]*/gm;
  let error = document.querySelector("#errorFirstName");

   if (firstNameValue.charAt(0) != firstNameValue.charAt(0).toUpperCase()){
    error.innerHTML = '<span class="red">First name should be always capital<span>';
   }

   else if (firstNameValue.length === 0 ){
    error.innerHTML = '<span class="red">name field is required<span>';
   }
  else if (reg.test(firstNameValue)) {
    error.innerHTML = "";
    fnameb = true;
  }
  else if (regex.test(firstNameValue)){
    error.innerHTML = "";
    fnameb = true;
  }
  
  else {
    error.innerHTML = '<span class="red">Invalid name<span>';
  }
}

firstName.addEventListener("keydown", (e) => {
  if ((firstName.selectionStart===0 && e.keyCode ===32) || /[^\w\s]/.test(e.key) || /\d/.test(e.key)||e.keyCode ===32) {
    e.preventDefault();
  }

  
});

const lastName = document.querySelector("#lastName");
let errorl = document.querySelector("#errorlastname");
let isDotEntered = false;

function lastname() {
  let lastNameValue = lastName.value;
  let reg = /^(?=.{3,20})[a-zA-Z]*(.)(?!\1)(.)(?!\1|\2)[a-zA-Z]*|[\.]/;
  if (lastNameValue.length === 0 ){
    errorl.innerHTML = '<span class="red">last name field is required<span>';
   }
   else if (firstNameValue.charAt(0) != firstNameValue.charAt(0).toUpperCase()){
    error.innerHTML = '<span class="red">First name should be always capital<span>';
   }
  else if (reg.test(lastNameValue)) {
    errorl.innerHTML = "";
    lnameb = true;
  } 
  else {
    errorl.innerHTML = '<span class="red">Invalid last name<span>';
  }

  if (lastNameValue.includes('.')){
    Input.disable=true;
  }
}

lastName.addEventListener("keydown", (e) => {
  if ((lastName.selectionStart === 0 && e.keyCode === 32)  || /\d/.test(e.key) ||e.keyCode ===32) {
    e.preventDefault();
  }
  if (isDotEntered && e.keyCode !== 8) {
    e.preventDefault();
  } 
  
  if (e.keyCode === 190) {
    isDotEntered = true;
    errorl.innerHTML = " ";
  }
  if(e.keyCode === 8) {
    isDotEntered = false;
  }

  
});

const EmailID = document.querySelector("#email");

function Emailid() {
  let EmailIDvalue = EmailID.value;
  let reg = /^\b[A-Za-z0-9._%+-]+@[A-Za-z0-9isDotEntered-]+\.[A-Z|a-z]{2,}\b$/gm;
  let error = document.querySelector("#erroremail");
  let myArr = EmailIDvalue.split(".");
  if (EmailIDvalue.length === 0 ){
    error.innerHTML = '<span class="red">Email field is required<span>';
   }
  else if (myArr[myArr.length - 1] === myArr[myArr.length - 2]) {
    error.innerHTML = '<span class="red">Invalid email address <span>';
  } else if (reg.test(EmailIDvalue)) {
    error.innerHTML = "";
    emailb = true;
  } else {
    error.innerHTML = '<span class="red">Invalid email address <span>';
  }
}

EmailID.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    e.preventDefault();
  }
});

const password = document.querySelector("#Password");

function passwords() {
  let passwordValue = password.value;
  let reg =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`\-={}[\]:;"'<>,.?/])(?!.*\s).{8,20}$/gm;
  let error = document.querySelector("#errorPassword");
  if (passwordValue.length === 0 ){
    error.innerHTML = '<span class="red">password field is required<span>';
   }
  else if (reg.test(passwordValue)) {
    error.innerHTML = "";
    passwordb = true;
  } else {
    error.innerHTML = '<span class="red">minimum 8 characters and maximum 16 characters ,atleast 1 upper case and 1 lower case letter ,1 special character,and 1 number also <span>';
  }
}

password.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    e.preventDefault();
  }
});

const confirmPassword = document.querySelector("#confirmPassword");

function confirmPasswords() {
  let confirmPasswordvalue = confirmPassword.value;
  let passwordvalue = password.value;
  let error = document.querySelector("#errorconfirmPassword");
  if (confirmPasswordvalue.length === 0 ){
    error.innerHTML = '<span class="red"> confirm password field is required<span>';
   }
  else if (passwordvalue !== confirmPasswordvalue) {
    error.innerHTML = '<span class="red">Invalid confirm password  <span>';
  } else {
    error.innerHTML = "";
    cpasswordb = true;
  }
}

confirmPassword.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    e.preventDefault();
  }python
});

function phonenumber() {
  const countrySelect = document.getElementById("country-select");
  const phoneInput = document.getElementById("phone-input");
  const codeInput = document.getElementById("code-input");

  countrySelect.addEventListener("change", () => {
    const selectedCountry = countrySelect.value;
    let countryCode = "";
    var maxLength = "";

    switch (selectedCountry) {
      case "us":
        countryCode = "+1";
        phoneInput.setAttribute("maxlength", "10");
        phoneInput.setAttribute("minlength", "10");
        break;
      case "vietnam":
        countryCode = "+84";
        phoneInput.setAttribute("maxlength", "11");
        phoneInput.setAttribute("minlength", "7");
        break;
      case "india":
        countryCode = "+91";
        phoneInput.setAttribute("maxlength", "10");
        phoneInput.setAttribute("minlength", "10");
        break;
      case "china":
        countryCode = "+86";
        phoneInput.setAttribute("maxlength", "11");
        phoneInput.setAttribute("minlength", "11");
        break;
      case "uae":
        countryCode = "+971";
        phoneInput.setAttribute("maxlength", "9");
        phoneInput.setAttribute("minlength", "9");
        break;
      default:
        codeInput.value = "";
        return;
    }

    codeInput.value = countryCode;
    phoneInput.value = "";
    phoneInput.placeholder = "Enter your phone number";

    phoneInput.focus();
  });

  phoneInput.addEventListener("input", () => {
    const selectedCountry = countrySelect.value;
    const phoneNumber = phoneInput.value;
    const regex = getRegexForCountry(selectedCountry);
    let errorp= document.querySelector('#errorp');

    if (phoneNumber.match(regex)) {
        errorp.innerHTML="";
      phonenumberb = true;
    } else {
      errorp.innerHTML="<div class='red'> enter valid phone</div>"
    }
  });

  function getRegexForCountry(countryCode) {
    switch (countryCode) {
      case "us":
        return /\b(?!1)[0-9]{10}\b/gm;
      // return /^(\+?1\s*[-.]?)?\(?[2-9][0-8][0-9]\)?/;
      // return /^(?!1)[2-9]\d{3}-\d{3}-\d{4}$/;
      // return /^(\d{1,3})(\d{0,3})(\d{0,4})$/;
      case "vietnam":
        return /^(03|05|07|08|09)\d{5,9}$/;
      case "india":
        return /^[6789](?!.*([0-9])\1\1\1)[0-9]{9}$/gm;
      case "china":
        return /^(13|14|15|16|17|18|19)\d{9}$/;
      case "uae":
        return /^[2-9]\d{1}\d{7}|5[0-9]{1}\d{7}$/gm;
      default:
        return /.*/;
    }
  }
}

// const genderOptions = document.querySelectorAll('input[name="gender"]');

// let selectedGender = null;

// for (let i = 0; i < genderOptions.length; i++) {
//   genderOptions[i].onclick = function() {
//     selectedGender = this.value;
//     console.log("Selected gender:", selectedGender);
//   };
//}



function Vgender(){
  let radioButtons = document.getElementsByName("gender");
   for(let i=0;i<radioButtons.length;i++){
    if(radioButtons[i].checked){
      radioSelected=true;
      break;
    }
   }
}

function language(){
  let checkbox=document.getElementsByName("lan");
  for(let i=0;i<checkbox.length;i++){
    if(checkbox[i].checked){
        checkboxb=true;
        break;
    }
  }
}




let address=document.querySelector("#address");

function validateaddress(){
    let addressID=address.value;
    let error=document.getElementById("erroradd");
    let reg=/^[A-Za-z0-9- \.\,\\\/]{5,52}$/gm;

    if (reg.test(addressID)){
        error.innerHTML="";
        addb=true;
    }
    else{
      error.innerHTML="<div class='red'> enter valid address</div>";
    }
}

address.addEventListener("keydown", (e) => {
  if ((address.selectionStart===0 && e.keyCode ===32) ) {
    e.preventDefault();
  }
});



function addWSpace(el) {
  const address = el.value;
  let formattedAddress = '';
  let count = 0;

  for (let i = 0; i < address.length; i++) {
    if (count > 0 && count % 16 === 0) {
      if (address[i] !== ' ') {
        formattedAddress += ' ';
      }
    }
    formattedAddress += address[i];
    if (address[i] !== ' ') {
      count++;
    } else {
      count = 0;
    }
  }

  el.value = formattedAddress;
}
address.addEventListener('input', function() {
  addWSpace(address);
});
 

  

// inputField.addEventListener("keydown", (event) => {
//   if (event.code === "Space" && inputField.value.length === 0) {
//     event.preventDefault();
//   }
// });





function validate() {
  if (fnameb === false) {
    alert("invalid first name");
    return false;
  }



  if ((lnameb === false && isDotEntered===false)) {
    alert("invalid last name");
    return false;
  }
  
  

  
  if (emailb === false) {
    alert("invalid emailid");
    return false;
  }
  if (passwordb === false) {
    alert("invalid password");
    return false;
  }
  if (cpasswordb === false) {
    alert("invalid confirm password");
    return false;
  }
  if (phonenumberb === false) {
    alert("invalid phone number");
    return false;
  }
  if (radioSelected===false){
    alert("please fill the gender field");
    return false;
  }

  if (addb===false){
    alert("please enter valid address");
    return false;
  }

  if (checkboxb===false){
    alert("please select the language field")
    return false;
  }

  // if (mydob===false){
  //   alert("please fill the date of birth field");
  //   return false;
  // }

 

  alert("form is submitted");
  return true;
}