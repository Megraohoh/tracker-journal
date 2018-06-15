//Purpose: Display emote picker
const $ = require("jquery")
const picker = require("./picker")

//Next tell it where to listen for a click, the container it should be appended to, and the input/textarea/contenteditable it needs to work with
const emoteComponent = function() {
    const emoteEl = $("#emote")

const emoteDiv = document.createElement("div")
emoteDiv.id = "emoteDiv"
emoteEl.append(emoteDiv)

const iconP = document.createElement("button")
iconP.id = "my-icon"
iconP.textContent = "click"
emoteDiv.append(iconP)

const containerS = document.createElement("section")
containerS.id = "container"
emoteDiv.append(containerS)

const editableT = document.createElement("textarea")
editableT.id = "my-input"
emoteDiv.append(editableT)

const icon      = document.getElementById("my-icon");
const container = document.getElementById("container");
const editable  = document.getElementById("my-input");

picker.listenOn(icon, container, editable);
console.log("called")

}


module.exports = emoteComponent