//Purpose: To re-write emote functionality
const $ = require("jquery")
const entryManager = require("../../apiManager/entriesApiManager")
const activeUser = require("../../apiManager/activeUserApiManager")

let selectedEmote
const emoteComponent = function() {

    const emoteOutputResult = $("#smileys").on("click", function(e) {
        $("#result").html(e.target.parentElement.firstElementChild.value)
        selectedEmote = e.target.parentElement.firstElementChild.value
        
    })
    //Emote face save button
    const emoteSaveBtn = document.createElement("button")
    emoteSaveBtn.id = "emoteSaveBtn"    
    emoteSaveBtn.type = "button"    
    emoteSaveBtn.textContent = "Save"
    $(".container").append(emoteSaveBtn)
    
    //Event listener on save
    emoteSaveBtn.onclick = function() {
        console.log(selectedEmote)
       
        //Call API manager
        let userId = activeUser.getActiveUser("ActiveUser")
        entryManager.createEntry({
            "userId": JSON.parse(userId.id),
            "entryTypeId": 3,
            "input": selectedEmote,  //<--most likely need to change
            "timestamp": Date.now()
        })
    }
    
 
} 

module.exports = emoteComponent