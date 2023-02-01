
// sign-up validation starts


// Accessing the form by calling it with tag name

let formEl = document.getElementsByTagName("form")[0];


// validation of name input value

formEl[0].oninput = ()=>{
    let nameError = document.getElementById("nameError");
    let nameFormat = /^[a-zA-Z ]+$/ ;

    if(formEl[0].value.trim() == ""){
        nameError.innerHTML = "Please enter your name";
        nameError.classList.remove("d-none");
        formEl[0].style.border = "3px solid #ff0000";
        return false;
    }else if(!formEl[0].value.match(nameFormat)){
        nameError.innerHTML = "Please enter a valid name";
        nameError.classList.remove("d-none");
        formEl[0].style.border = "3px solid #ff0000";
        return false;
    }else if(formEl[0].value.length < 3){
        nameError.innerHTML = "Name should contain atleast 3 characters";
        formEl[0].style.border = "3px solid #ff0000";
        nameError.classList.remove("d-none");
        return false;
    }else{
         nameError.innerHTML = "";
        nameError.classList.add("d-none");
        formEl[0].style.border = "3px solid #90ee90";
        return true;
     }
}

// validation of email input value

formEl[1].oninput = ()=>{
    let emailError = document.getElementById("emailError");
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

    if(formEl[1].value == ""){
        emailError.innerHTML = "Please enter your email";
        emailError.classList.remove("d-none");
        formEl[1].style.border = "3px solid #ff0000";
         return false;
     }else if(!formEl[1].value.match(mailformat)){
         emailError.innerHTML = "Enter a valid email address";
         formEl[1].style.border = "3px solid #ff0000";
         emailError.classList.remove("d-none");
         return false;
     }else{
         emailError.innerHTML = "";
         emailError.classList.add("d-none");
         formEl[1].style.border = "3px solid #90ee90";
         return true;
     }
}


// validation of password input value

formEl[2].oninput = ()=>{
    let passwordError = document.getElementById("passwordError");
    let passwordFormat = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";

    if(formEl[2].value == ""){
         passwordError.innerHTML = "Please enter your password" ;
         passwordError.classList.remove("d-none");
         formEl[2].style.border = "3px solid #ff0000";
         return false;
     }else if(!formEl[2].value.match(passwordFormat)){
         passwordError.innerHTML = "Should contain 1 uppercase , 1 lowercase, 1 number and 1 character";
         formEl[2].style.border = "3px solid #ff0000";
         passwordError.classList.remove("d-none");
         return false;
     }else{
         passwordError.innerHTML = "";
         passwordError.classList.add("d-none");
         formEl[2].style.border = "3px solid #90ee90";
         return true;
     }

}


// validation of confirmPassword input value

formEl[3].oninput = ()=>{
    let confPasswordError = document.getElementById("confPasswordError");

        if(!formEl[3].value.match(formEl[2].value)){
         confPasswordError.innerHTML = "Not matching";
         confPasswordError.classList.remove("d-none");
         formEl[3].style.border = "3px solid #ff0000";
         return false;
     }else if(formEl[3].value == ""){
         confPasswordError.innerHTML = "Please Retype your password" ;
         confPasswordError.classList.remove("d-none");
         formEl[3].style.border = "3px solid #ff0000";
         return false;
     }else if(formEl[2].value == ""){
        formEl[3].style.border = "3px solid #ff0000";
     }
     else{
         confPasswordError.innerHTML = "";
         confPasswordError.classList.add("d-none");
         formEl[3].style.border = "3px solid #90ee90";
         return true;
     }
}


// validation of phone input value

formEl[4].oninput = ()=>{
     let phoneError = document.getElementById("phoneError");
     let phoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/ ;

     if(formEl[4].value.trim() == ""){
         phoneError.innerHTML = "Please enter your number";
         phoneError.classList.remove("d-none");
         formEl[4].style.border = "3px solid #ff0000";
         return false;
     }else if(!formEl[4].value.match(phoneFormat)){
         phoneError.innerHTML = "Enter a valid number"
         formEl[4].style.border = "3px solid #ff0000";
         phoneError.classList.remove("d-none");
         return false;
     }else{
         phoneError.innerHTML = "";
         phoneError.classList.add("d-none");
         formEl[4].style.border = "3px solid #90ee90";
         return true;
     }
}


    // final validation on clicking the submit button

    const validateForm = (event)=>{
        event.preventDefault();

        let signup_valid =document.getElementById("signup-valid");
        let success_box = document.getElementById("success-box");

        // User details are stored inside storedData variable

        let storedData = {
            name : formEl[0].value,
            email : formEl[1].value,
            password : formEl[2].value,
            number : formEl[4].value
        }


        if(formEl[0].oninput()==true && formEl[1].oninput()==true && formEl[2].oninput()==true && formEl[3].oninput()==true && formEl[4].oninput() == true){
        console.log(storedData);
        success_box.classList.remove("d-none");
        success_box.innerHTML = `Hey ${formEl[0].value}, your signup is successful &#128512 &#128525`;
        signup_valid.style.background = "radial-gradient(circle at 10% 20%, rgb(43, 199, 188) 0%, rgb(219, 249, 203) 72.9%)";
           
        }else if(formEl[0].oninput().value == "" || formEl[1].oninput().value == "" || formEl[2].oninput().value == "" || formEl[3].oninput().value == "" || formEl[4].oninput().value == "" ){
            formEl[0].style.border = "3px solid #ff0000";
            formEl[1].style.border = "3px solid #ff0000";
            formEl[2].style.border = "3px solid #ff0000";
            formEl[3].style.border = "3px solid #ff0000";
            formEl[4].style.border = "3px solid #ff0000";
          
        }
    } 


    // sign-up validation ends
