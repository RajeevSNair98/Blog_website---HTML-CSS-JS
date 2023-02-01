
// validation of signin form starts


// Accessing the form by calling it with tag name
let formEl = document.getElementsByTagName("form")[0];


// validation of email input value

formEl[0].oninput = ()=>{
    let emailError = document.getElementById("emailError");
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

    if(formEl[0].value == ""){
        emailError.innerHTML = "Please enter your email";
        emailError.classList.remove("d-none");
        formEl[0].style.border = "3px solid #ff0000";
         return false;
     }else if(!formEl[0].value.match(mailformat)){
         emailError.innerHTML = "Enter a valid email address";
         formEl[0].style.border = "3px solid #ff0000";
         emailError.classList.remove("d-none");
         return false;
     }else{
         emailError.innerHTML = "";
         emailError.classList.add("d-none");
         formEl[0].style.border = "3px solid #90ee90";
         return true;
     }
}

// validation of password input value

formEl[1].oninput = ()=>{
    let passwordError = document.getElementById("passwordError");
    let passwordFormat = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";

    if(formEl[1].value == ""){
         passwordError.innerHTML = "Please enter your password" ;
         passwordError.classList.remove("d-none");
         formEl[1].style.border = "3px solid #ff0000";
         return false;
     }else if(!formEl[1].value.match(passwordFormat)){
         passwordError.innerHTML = "Should contain 1 uppercase , 1 lowercase, 1 number and 1 character";
         formEl[1].style.border = "3px solid #ff0000";
         passwordError.classList.remove("d-none");
         return false;
     }else{
         passwordError.innerHTML = "";
         passwordError.classList.add("d-none");
         formEl[1].style.border = "3px solid #90ee90";
         return true;
     }
}

// final validation on clicking the submit button

function validateSignin(){

    if(formEl[0].oninput() == true && formEl[1].oninput() == true){
        return true;
    }else if(formEl[0].oninput() == ""){
        formEl[0].style.border = "3px solid #ff0000";
        return false
    }else if(formEl[1].oninput() == ""){
        formEl[1].style.border = "3px solid #ff0000";
        return false
    }
}


// validation of signin form ends