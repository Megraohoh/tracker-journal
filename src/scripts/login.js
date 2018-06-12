const $ = require("jquery")

const loginComponent = function() {
const loginEl = $("#login")

//section creation and attach to html doc
const loginSection = document.createElement("section")
loginSection.setAttribute("id", "login")
loginEl.append(loginSection)

// //username input
// const loginUserName = document.createElement("input")
// loginUserName.id = "loginUserName"
// loginUserName.type = "text"
// loginUserName.placeholder = "Name"
// loginSection.append(loginUserName)

//user email
const loginEmail = document.createElement("input")
loginEmail.id = "loginEmail"
loginEmail.type = "text"
loginEmail.placeholder = "Email"
loginSection.append(loginEmail)

//user password
const loginPassword = document.createElement("input")
loginPassword.id = "loginPassword"
loginPassword.type = "password"
loginPassword.placeholder = "Password"
loginSection.append(loginPassword)

//submit button
const loginBtn = document.createElement("button")
loginBtn.type = "button"
loginBtn.textContent = "Log In"
loginSection.append(loginBtn)

//event listener
loginBtn.onclick = function () {
    //Get all users from API
    
}

}

module.exports = loginComponent