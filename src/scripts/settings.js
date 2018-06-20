//Purpose: to display settings options when nav option selected
const $ = require("jquery")
const userSettingsManager = require("../apiManager/settingsApiManager")

const user = JSON.parse(sessionStorage.getItem("ActiveUser"))
//first setting to create is to hide text in journal input
const hideJournalText = function () {
    $("#settings").click(function (e) {
        //pull settings from DB
        userSettingsManager.getSingleUserSettings(user.id).then(settings => {
                $("#toggleSetting").prop("checked", JSON.parse(settings[0].hideText))  
        })
        var elems = document.querySelectorAll(".modal");
        var instances = M.Modal.init(elems);
    })
    $("input:checkbox").change(function () {
        if ($(this).is(":checked")) {
            document.getElementById("journalText").setAttribute("type", "password")
        
            userSettingsManager.updateusersettings({
                "id": 1,
                "userId": user.id,
                "hideText": true
            })
        } else {
            ($(this).not(":checked")) 
            userSettingsManager.updateusersettings({
                "id": 1,
                "userId": user.id,
                "hideText": false
            })
        }
    })
}


module.exports = hideJournalText
