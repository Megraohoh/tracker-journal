//Purpose: To navigate back to the home page when the "home" button is selected in nav
const $ = require("jquery")
const homePage = require("./homePage")

const homeNavBtn = function () {
    $("#home").click(function(e){
        homePage()
    })
}

module.exports = homeNavBtn