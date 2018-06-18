//Purpose: Login option for landing page
const $ = require("jquery")
const session = require("../apiManager/activeUserApiManager")
const userManager = require("../apiManager/userApiManager")

const loginComponent = function() {
    const loginEl = $("#login")

    //section creation and attach to html doc
    const loginSection = document.createElement("section")
    loginSection.setAttribute("id", "login")
    loginEl.append(loginSection)

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
    loginBtn.id = "loginBtn"
    loginBtn.type = "button"
    loginBtn.textContent = "Log In"
    loginSection.append(loginBtn)

    //event listener
    loginBtn.onclick = function() { 
        //Get all users from API
        userManager.getAllusers().then(allusers => {
            let userAuthenticated = false;
            allusers.forEach(user => {
                if(user.password === loginPassword.value && user.email === loginEmail.value) {
                    userAuthenticated = true;
                    $("#login").hide();
                    $("#loginEmail").val("")
                    $("#loginPassword").val("")
                    $("#register").hide();
                  
                    session.saveActiveUser(user);
                }
            }) 
            if (!userAuthenticated) {
                alert("Email or Password did not match a known user. Care to try again?");
            }
        })
    }
}

module.exports = loginComponent