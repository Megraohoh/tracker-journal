// //Purpose: Display emote picker
const $ = require("jquery")
const entryManager = require("../../apiManager/entriesApiManager")
const activeUser = require("../../apiManager/activeUserApiManager")
// const picker = require("./picker")

const emoteComponent = function() {

    const emoteInput = $("#smileys").on("click", function(e) {
        $("#result").html(e.target.parentElement.firstElementChild.value);
    })
    
    //Emote face save button
    const emoteSaveBtn = document.createElement("button")
    emoteSaveBtn.id = "emoteSaveBtn"    
    emoteSaveBtn.type = "button"    
    emoteSaveBtn.textContent = "Save"
    $(".container").append(emoteSaveBtn)
    
    //Event listener on save
    emoteSaveBtn.onclick = function() {
        //Call API manager
        let userId = activeUser.getActiveUser("ActiveUser")
        entryManager.createEntry({
            "userId": JSON.parse(userId.id),
            "entryTypeId": 3,
            "input": emoteInput,
            "timestamp": Date.now()
        })
    }
    
 
} 

module.exports = emoteComponent