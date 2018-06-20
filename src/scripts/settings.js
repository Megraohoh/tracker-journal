//Purpose: to display settings options when nav option selected
const $ = require("jquery")
const userManager = require("../apiManager/userApiManager")

//first setting to create is to hide text in journal input
const hideJournalText = function () {
    $("#settings").click(function (e) {
        var elems = document.querySelectorAll(".modal");
        var instances = M.Modal.init(elems);
    })
    $("input:checkbox").change(function () {
        if ($(this).is(":checked")) {
            return document.getElementById("journalText").setAttribute("type", "password")
        }
    })
    $("input:checkbox").change(function () {
        let user = null
        if ($(this).is(":checked")) {
            user = JSON.parse(sessionStorage.getItem("ActiveUser"))
            //make sure settings exists before changing property inside it
            user.settings = {
            }
            user.settings.hideText = true
            userManager.updateusers(user)
        }


        



        // userManager.updateusers({

        //     "settings": {
        //         "hideText": true
        //     }
        // })

    })
}
    
module.exports = hideJournalText
