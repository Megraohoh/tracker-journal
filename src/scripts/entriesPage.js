//Purpose: to display previous entries when nav option selected
const $ = require("jquery")
const userSettingsManager = require("../apiManager/settingsApiManager")

const entriesPageComponent = function () {
    let entriesAnchor = $("#entriesPage")
    entriesAnchor.hide()
    $("#entries").click(function (e) {
        entriesAnchor.empty()
        
        const rowDiv = document.createElement("div")
        rowDiv.setAttribute("class", "row")
        entriesAnchor.append(rowDiv)

        const colDiv = document.createElement("div")
        colDiv.setAttribute("class", "col s12 m6")
        rowDiv.append(colDiv)

        const cardDiv = document.createElement("div")
        cardDiv.setAttribute("class", "card blue-grey darken-1")
        colDiv.append(cardDiv)

        const cardContentDiv = document.createElement("div")
        cardContentDiv.setAttribute("class", "card-content white-text")
        cardDiv.append(cardContentDiv)

        const cardSpan = document.createElement("span")
        cardSpan.setAttribute("class", "card-title")
        cardSpan.innerText = "Title"
        cardContentDiv.append(cardSpan)

        const cardParagraph = document.createElement("p")
        cardParagraph.innerText = "Journal Entry"
        cardContentDiv.append(cardParagraph)
        
        // const cardActionDiv = document.createElement("div")
        // cardActionDiv.setAttribute("class", "card-action")
        // cardDiv.append(cardActionDiv)

        entriesAnchor.show()
        $("#list").hide()
        $("#journal").hide()
        $(".container").hide()
        $("#login").hide()
        $("#register").hide()
    })
}
module.exports = entriesPageComponent