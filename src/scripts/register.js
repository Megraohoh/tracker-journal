//Purpose: To provide a register user option on landing page
const $ = require("jquery")
const session = require("../apiManager/activeUserApiManager")
const userManager = require("../apiManager/userApiManager")

const registerComponent = function() {
    const registerEl = $("#register")

    //section creation and attach to html doc
    const registerSection = document.createElement("section")
    registerSection.setAttribute("id", "register")
    registerEl.append(registerSection)

    // //username input
    const registerUserName = document.createElement("input")
    registerUserName.id = "registerUserName"
    registerUserName.type = "text"
    registerUserName.placeholder = "Name"
    registerSection.append(registerUserName)

    //user email
    const registerEmail = document.createElement("input")
    registerEmail.id = "registerEmail"
    registerEmail.type = "text"
    registerEmail.placeholder = "Email"
    registerSection.append(registerEmail)

    //user password
    const registerPassword = document.createElement("input")
    registerPassword.id = "registerPassword"
    registerPassword.type = "password"
    registerPassword.placeholder = "Password"
    registerSection.append(registerPassword)

    //submit button
    const registerBtn = document.createElement("button")
    registerBtn.type = "button"
    registerBtn.textContent = "Register User"
    registerSection.append(registerBtn)

    //event listener
    registerBtn.onclick = function() {
        userManager.getAllusers().then(allUsers => {
            let validUser = true;
            allUsers.forEach(user => {
                if (user.email === registerEmail.value) {
                    validUser = false;
                    alert("This email is already in use. Have you registered previously?")
                }
            })
            if (validUser) {
                let newRequest = userManager.createUsers({
                    "name": registerUserName.value,
                    "email": registerEmail.value,
                    "password": registerPassword.value 
                })
                newRequest.done(function(msg) {
                    $("#register").hide();
                    $("#registerUserName").val("");
                    $("#registerEmail").val("");
                    $("#registerPassword").val("");
                    $("#login").hide();
                    session.saveActiveUser(validUser);
                })
            }
        })
    }

}

module.exports = registerComponent