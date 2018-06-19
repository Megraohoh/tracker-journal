//Purpose: to display settings options when nav option selected
const $ = require("jquery")
const  userManager = require("../apiManager/userApiManager")
    //ALL PROFILE AND SETTINGS SHOULD BE FILLED OUT AND STAY AS DEFAULT TO THE USER LOGGED IN
 
//first setting to create is to hide text in journal input
const hideJournalText = function() { 
    $("#settings").click(function(e){
        var elems = document.querySelectorAll(".modal");
        var instances = M.Modal.init(elems);
      });  

    $("input:checkbox").change(function(){
        if ($(this).is(":checked")) {
            console.log("is checked")
            return document.getElementById("journalText").setAttribute("type", "password")
        }
    })
}
module.exports = hideJournalText
