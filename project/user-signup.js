let userName = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let repeatPassword = document.getElementById("repeat-password");
let logInButton = document.getElementById("log-in-button");
let form = document.getElementsByClassName("signup-form")[0];
let formWrapper = document.getElementsByClassName("form-wrapper")[0];
let signUpButton = document.getElementById('sign-up-btn')
let usersDB = JSON.parse(localStorage.getItem('users'))
let currentUser = JSON.parse(localStorage.setItem('currentUser'))
signUpButton.addEventListener("click", function (event) {
    event.preventDefault();
    deleteErrors();
    if (checkValidUser()) {
        console.log("sign up succesfully!")
        console.log(userName.value, email.value, password.value);
        createUser(userName.value, email.value, password.value, score = 0)
        let div = document.createElement("div")
        div.innerHTML = `<p class="info-text" href="game.html"> Welcome ${userName.value} <a class="info-text" href="game.html"> Let's kill Some Dictators</a></p>`
        form.insertBefore(div, signUpButton)
    };
})
function checkValidUser() {
    let signUpValidator = new SignUpValidator(userName.value, email.value, password.value, repeatPassword.value);
    let usersDB = JSON.parse(localStorage.getItem("users"));
    let validUser = true;
    if (!signUpValidator.checkUserName()) {
        signUpValidator.errorCreator("Por favor, introduce un nombre válido", userName)
        validUser = false
    }
    if (!signUpValidator.checkEmail()) {
        signUpValidator.errorCreator("Por favor, introduce una dirección de mail válida", email)
        validUser = false
    }
    if (!signUpValidator.checkPassword()) {
        signUpValidator.errorCreator("Por favor, introduce una contraseña válida", password)
        validUser = false
    }
    if (!signUpValidator.checkRepeatPassword()) {
        signUpValidator.errorCreator("Las contraseñas no coinciden", repeatPassword)
        validUser = false
    }
    if (!signUpValidator.checkEmailInDB(usersDB)) {
        signUpValidator.errorCreator("Este mail ya existe", email)
        validUser = false
    }
    return validUser
}
function deleteErrors() {
    let errors = [...document.getElementsByClassName("error")]
    errors ? errors.forEach(error => error.remove()) : null;
}
function createUser(name, email, password) {
    const newUser = new User(name, email, password,score)
    if (usersDB) {
        usersDB.push(newUser);
    } else {
        usersDB = [newUser]
    }
    localStorage.setItem('users', JSON.stringify(usersDB));
}
function currentUser(){
}