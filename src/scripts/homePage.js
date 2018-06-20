//Show active user components
const $ = require("jquery")
// const activeUser = require("../../apiManager/activeUserApiManager")
const journalComponent = require("./entries/journal")
const listComponent = require("./entries/list")
const emoteComponent = require("./entries/emote")
const homeNavBtn = require("./homeNavBtn")
const logoutComponent = require("./logout")

//if there is an active user, show home page (list, journal, emote)

const homePage = function () {
    // const homePageEl = $("#home-page")
    // let active = activeUser.getActiveUser("ActiveUser")
    if (sessionStorage.length !== 0) {
        $("#list").show()
        $("#journal").show()
        $(".container").show()
        $("#login").hide()
        $("#register").hide()
        
    } else {
        (sessionStorage.length === 0)
        $("#login").show();
        $("#register").show();
        $("#list").hide()
        $("#journal").hide()
        $(".container").hide()
    
    }
}

module.exports = homePage

emoteComponent()
listComponent()
journalComponent()

logoutComponent()