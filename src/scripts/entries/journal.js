//Purpose: Display the written journal entry field
//Will need timestamp, input grab, db submission, hide text feature, save button 
const $ = require("jquery")
const entryManager = require("../../apiManager/entriesApiManager")
const activeUser = require("../../apiManager/activeUserApiManager")

const journalComponent = function() {
    const journalEl = $("#journal")
    //Journal section
    const journalSection = document.createElement("section")
    journalSection. setAttribute("id", "journalSection")
    journalSection.setAttribute("class", "entrySection")
    journalEl.append(journalSection)

    //Journal input field
    const journalText = document.createElement("textarea")
    journalText.id = "journalText"
    journalText.name = "journalInput"
    journalText.rows = "10"
    journalText.cols = "10"
    journalText.placeholder = "Type out what's bouncing around in your head."
    journalSection.append(journalText)

    //Journal save button
    const journalSaveBtn = document.createElement("button")
    journalSaveBtn.id = "journalSaveBtn"
    journalSaveBtn.type = "button"
    journalSaveBtn.textContent ="Save"
    journalSection.append(journalSaveBtn)

    //Event listener on save
    journalSaveBtn.onclick = function(){
        //capture input from textarea to compare to entries input
        let journalInput = $("#journalText").val()

        //get all entries from API
        entryManager.getAllEntries().then(allentries => {
            let entryAuthenticated = true;
            allentries.forEach(entry => {
                if(journalInput === entry.input){
                    entryAuthenticated = false;
                }
            })
            if (entryAuthenticated) {
                $("#journalText").val("").blur();
                let userId = activeUser.getActiveUser("ActiveUser")
                entryManager.createEntry({
                    "userID": JSON.parse(userId.id),
                    "entryTypeId": 2,
                    "input": journalInput
                });
            }
        })
    }
}
 
module.exports = journalComponent