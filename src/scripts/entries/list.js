//Purpose: Display the list entry field
//Will need timestamp, input grab, input styling, db submission, hide text feature, save button 
const $ = require("jquery")
const entryManager = require("../../apiManager/entriesApiManager")
const activeUser = require("../../apiManager/activeUserApiManager")

const listComponent = function() {
    const listEl = $("#list")
    //List section
    const listSection = document.createElement("section")
    listSection.setAttribute("id", "listSection")
    listSection.setAttribute("class", "entrySection")
    listEl.append(listSection)

    //List input field
    const listText = document.createElement("textarea")
    listText.id = "listText"
    listText.name = "listInput"
    listText.attributes.required = ""
    listText.rows = "10"
    listText.cols = "10"
    listText.placeholder = "List out the things you're feeling."
    listSection.append(listText)

    //List save button
    const listSaveBtn = document.createElement("button")
    listSaveBtn.id = "listSaveBtn"
    listSaveBtn.type = "button"
    listSaveBtn.textContent ="Save"
    listSection.append(listSaveBtn)

    //Event listener on save
    // if (e.charCode === 32) {} <--on this event, trigger class change 
listSaveBtn.onclick = function(){
    //capture the input
    let listInput = $("#listText").val()

    entryManager.getAllEntries().then(allentries => {
        allentries.forEach(entry => {
            
            // if(! listInput.valid()) { 
            //     return false;
            // } else {
                $("#listInput").val("").blur();
                let userId = activeUser.getActiveUser("ActiveUser")
                entryManager.createEntry({
                    "userID": JSON.parse(userId.id),
                    "entryTypeId": 1,
                    "input": listInput,
                    "timestamp": Date.now()
                })
            // }
        })
    })
}
    
} 


module.exports = listComponent