//Purpose: Display the written journal entry field
//Will need timestamp, input grab, db submission, hide text feature, save button 
const $ = require("jquery")
const entryManager = require("../../apiManager/entriesApiManager")

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
        //get all entries from API
        entryManager.getAllEntries().then(allentries => {
            let entryAuthenticated = false;
            allentries.forEach(entry => {
                console.log("current entries", entry)
                if(entry.length !== 0){
                    entryAuthenticated = true
                }
            })
            if (!entryAuthenticated) {
                alert("There needs to be a little bit more to the journal before this will save. Type it out. Or whatever.")
            }
        })
    }
}
 
module.exports = journalComponent