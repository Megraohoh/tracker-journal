//Purpose: to display previous entries when nav option selected
const $ = require("jquery")
const cardComponent = require("./createCard")
const entryManager = require("../apiManager/entriesApiManager")

const user = JSON.parse(sessionStorage.getItem("ActiveUser"))

const entriesAnchor = $("#entriesPage")
const entriesPageComponent = function () {
    entriesAnchor.hide()

    $("#entries").click(function (e) {
        entriesAnchor.empty()

        let userEntries = entryManager.getAllEntriesFromSingleUser(user.id).then(entry => {
            entry.forEach(e => {
                const time = new Date(JSON.parse(e.timestamp))
                cardComponent(e)
            })
        })

        entriesAnchor.show()
        $("#list").hide()
        $("#journal").hide()
        $(".container").hide()
        $("#login").hide()
        $("#register").hide()
    })
}
module.exports = entriesPageComponent