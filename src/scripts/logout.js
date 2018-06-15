const $ = require("jquery")
const session = require("../apiManager/activeUserApiManager")

//onclick function
const logoutComponent = function() {
    $("#logout").click(function(e) {
        session.clearActiveUser();
    });
}

module.exports = logoutComponent