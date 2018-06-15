//Purpose: Display emote picker
const $ = require("jquery")
const picker = require("./picker")

//Next tell it where to listen for a click, the container it should be appended to, and the input/textarea/contenteditable it needs to work with
const emoteComponent = function() {
    const emoteEl = $("#emote")
    
    const containerSection = document.createElement("section")
    containerSection.id = "container"
    emoteEl.append(containerSection)

    const iconBtn = document.createElement("button")
    iconBtn.id = "my-icon"
    iconBtn.textContent = "Show Emojis"
    containerSection.append(iconBtn)

    const editableTextarea = document.createElement("textarea")
    editableTextarea.id = "my-input"
    containerSection.append(editableTextarea)

    const icon = document.getElementById("my-icon");
    const container = document.getElementById("container");
    const editable = document.getElementById("my-input");

picker.listenOn(icon, container, editable);

}


module.exports = emoteComponent