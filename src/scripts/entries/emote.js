// //Purpose: Display emote picker
const $ = require("jquery")
const entryManager = require("../../apiManager/entriesApiManager")
const activeUser = require("../../apiManager/activeUserApiManager")
// const picker = require("./picker")

const emoteComponent = function() {

    $("#smileys").on("click", function(e) {
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
        //Capture face input
        let emoteInput = $("#result").val()
        //reset input field to default
        $("#result").val("").blur();
        //Call API manager
        let userId = activeUser.getActiveUser("ActiveUser")
            entryManager.createEntry({
                "userId": JSON.parse(userId.id),
                "entryTypeId": 3,
                "input": emoteInput,
                "timestamp": Date.now()
            })

            console.log("saved")
    }
    
 
} 


// //Next tell it where to listen for a click, the container it should be appended to, and the input/textarea/contenteditable it needs to work with
// const emoteComponent = function() {
//     const emoteEl = $("#emote")
      
//     const containerSection = document.createElement("section")
//     containerSection.id = "container"
//     emoteEl.append(containerSection)

    
//     const iconBtn = document.createElement("button")
//     iconBtn.id = "my-icon"
//     iconBtn.textContent = "Show Emojis"
//     containerSection.append(iconBtn)
    
//     const editableTextarea = document.createElement("textarea")
//     editableTextarea.id = "my-input"
//     containerSection.append(editableTextarea)
    
//     const icon = document.getElementById("my-icon");
//     const container = document.getElementById("container");
//     const editable = document.getElementById("my-input");

    
//     iconBtn.onclick = function() {
//             //example of setting a particular category as active and then filtering its contents
//             console.log(picker)
//             picker.active_category = ["People"];
//             picker.active_category.filter((/**Emoji*/emoji) => emoji.matchesSearchTerm(new RegExp("people")));
//             //some time later programmatically show all emojis
//             setTimeout(() => {
//                 picker.active_category.showAllEmojis();
//             }, 3000)
//             picker.listenOn(icon, container, editable);
//         }
        
//     console.log("ready to click")
// }
// // console.log(document.getElementsByClassName("emoji-char-wrapper").HTMLCollection)
// //      for (var i = 0; i < document.getElementsByClassName("emoji-char-wrapper").length; i++) {
// //             console.log(document.getElementsByClassName("emoji-char-wrapper")[i].dataset.category); 
// //          }
// //         // console.log(x.dataset.category)
// //     }    




module.exports = emoteComponent