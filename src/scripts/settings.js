//Purpose: to display settings options when nav option selected
const $ = require("jquery")
const  userManager = require("../apiManager/userApiManager")
const session = require("../apiManager/activeUserApiManager")
    //ALL PROFILE AND SETTINGS SHOULD BE FILLED OUT AND STAY AS DEFAULT TO THE USER LOGGED IN
   
//first setting to create is to hide text in journal input
const hideJournalText = function() { 
    $("#settings").click(function(e){
        var elems = document.querySelectorAll(".modal");
        var instances = M.Modal.init(elems);
      });  

    $("input:checkbox").change(function(){
        if ($(this).is(":checked")) {
            return document.getElementById("journalText").setAttribute("type", "password")
        }
    })

    $("input:checkbox").change(function() {
        if ($(this).is(":checked")) {
            let user = JSON.parse(sessionStorage.getItem("ActiveUser")).then(user => {
                user.forEach( e => {
                    
                })
            })

            userManager.getSingleusers("user").then(userId => {})
            }

            //getsingleuser.then -> add settings then updateuser
            
            // userManager.updateusers({
       
            //     "settings": {
            //         "hideText": true
            //     }
            // })
        })
    

}
module.exports = hideJournalText
