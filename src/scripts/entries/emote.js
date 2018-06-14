//Purpose: Display the emote entry field
const $ = require("jquery")
const emojisList = require("emojis-list")
// const entryManager = require("../../apiManager/entriesApiManager")
// const activeUser = require("../../apiManager/activeUserApiManager")

//Emote function
const emoteComponent = function() {
    const emoteEl = $("#emote")
    //Emote section
    const emoteSection = document.createElement("section")
    emoteSection.setAttribute("id", "emoteSection")
    emoteSection.setAttribute("class", "entrySection")
    emoteEl.append(emoteSection)
    
    //"radio button" functionality
    //label>input>img src (emojisList[343])
    const emoteLabelLove = document.createElement("label")
    emoteLabelLove.class = "emoteLabel"
    
    const emoteInputLove = document.createElement("input")
    emoteInputLove.id = "heartLove"
    emoteInputLove.type = "radio"
    emoteInputLove.name = "emoji"
    emoteInputLove.value = "med"
    
    const emoteImgLove = document.createElement("img")
    emoteImgLove.src = emojisList[1348]
    console.log(emojisList[1348])

    emoteLabelLove.append(emoteInputLove)
    emoteLabelLove.append(emoteImgLove)
    emoteSection.append(emoteLabelLove)


//Blank emoji label, input, img, appends:
    // const emoteLabel_ = document.createElement("label")
    // emoteLabel_.class = "emoteLabel"
    
    // const emoteInput_ = document.createElement("input")
    // emoteInput_.id = ""
    // emoteInput_.type = "radio"
    // emoteInput_.name = "emoji"
    // emoteInput_.value = "med"

    // const emoteImg_ = document.createElement("img")
    // emoteImg_.src = ""

    // emoteLabel_.append(emoteInput_)
    // emoteLabel_.append(emoteImg_)
    // emoteSection.append(emoteLabel_)


    //Save button
        const emoteSaveBtn = document.createElement("button")
        emoteSaveBtn.id = "emoteSaveBtn"
        emoteSaveBtn.type = "button"
        emoteSaveBtn.textContent ="Save"
        emoteSection.append(emoteSaveBtn)
    //Event handler to update DB

}
module.exports = emoteComponent