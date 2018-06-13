//Purpose: Display the written journal entry field
//Will need timestamp, input grab, db submission, hide text feature, save button 
const $ = require("jquery")

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
}

module.exports = journalComponent