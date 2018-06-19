const $ = require("jquery")
const session = require("../apiManager/activeUserApiManager")
const refreshPage = require("./refresh")

//onclick function
const logoutComponent = function() {
    $("#logout").click(function(e) {
        $("#login").show();
        $("#register").show();
        $("#list").hide()
        $("#journal").hide()
        $(".container").hide()
        refreshPage()
        session.clearActiveUser();

    });
}

module.exports = logoutComponent