let userName = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let repeatPassword = document.getElementById("repeat-password");

let form = document.getElementsByClassName("signup-form")[0];
let formWrapper = document.getElementsByClassName("form-wrapper")[0];
let signUpButton = document.getElementById('sign-up-btn')

let usersDB = JSON.parse(localStorage.getItem('users'))

signUpButton.addEventListener("click", function(event){
    event.preventDefault();
    deleteErrors();
    
    if (checkValidUser()){
        
        createUser(name.value, email.value, password.value)
    };
})

function checkValidUser() {
    let signUpValidator = new SignUpValidator (userName.value, email.value, password.value, repeatPassword.value);
    
    // let usersDB = JSON.parse(localStorage.getItem("users"));
    let validUser = true;

    if(!signUpValidator.checkUserName()){
        signUpValidator.errorCreator("Please enter a valid username", userName)
        validUser=false
    }
    else if(!signUpValidator.checkUserNameLength()){
        signUpValidator.errorCreator("Username has to be 6 characters or more", userName)
        validUser=false
    }

    if(!signUpValidator.checkEmail()){
        signUpValidator.errorCreator("Enter a valid email address", email)
        validUser=false
    }
    if(!signUpValidator.checkPassword()){
        signUpValidator.errorCreator("Enter a valid password", password)
        validUser=false
    }
    if(!signUpValidator.checkRepeatPassword()){
        signUpValidator.errorCreator("Passwords do not match", repeatPassword)
        validUser=false
    }
    /* if (!signUpValidator.checkEmailInDB(usersDB)){
        signUpValidator.errorCreator("Este mail ya existe", email)
        validUser=false
    } */

    return validUser
}

function deleteErrors (){
    let errors = [...document.getElementsByClassName("error")]
    errors ? errors.forEach(error => error.remove()) : null;
}

function createUser (name, email, password) {
    const newUser = new User (name, email, password)

    if (usersDB){ // Si hay base de datos, 
        usersDB.push(newUser);
    } else {
        usersDB = [newUser]
    }
    localStorage.setItem('users', JSON.stringify(usersDB));
} 