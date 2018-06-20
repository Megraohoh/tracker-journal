//Purpose: Display the list entry field
//Will need hide text feature
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
    const listText = document.createElement("input")
    listText.id = "listText"
    listText.type = "text"
    listText.name = "listInput"
    listText.rows = "10"
    listText.cols = "10"
    listText.placeholder = "List out the things you're feeling."
    listSection.append(listText)
 
  //get value of individual word and set first class
$("#listText").keyup(function(e){
    if(e.keyCode === 32) {
        // $("#listText").css("background-color", "pink")
        var words = $(this).val().split(" ");
        wordDiv = document.createElement("div")
        wordDiv.value = words
        wordDiv.setAttribute("class", "starter")
    }
})


    //List save button
    const listSaveBtn = document.createElement("button")
    listSaveBtn.id = "listSaveBtn"
    listSaveBtn.type = "button"
    listSaveBtn.textContent ="Save"
    listSection.append(listSaveBtn)

    //Event listener on save
    listSaveBtn.onclick = function(e){
        //capture the input
    let listInput = $("#listText").val()    
    //reset the input field to default
    $("#listText").val("").blur();
    //call API manager
    let userId = activeUser.getActiveUser("ActiveUser")
        entryManager.createEntry({
            "userId": JSON.parse(userId.id),
            "entryTypeId": 1,
            "input": listInput,
            "timestamp": Date.now()
        })  
    }
}   

module.exports = listComponent