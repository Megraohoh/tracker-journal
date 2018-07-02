const $ = require("jquery")

const cardComponent = function(e) {
    const entriesAnchor = $("#entriesPage")

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
    cardSpan.innerText = e.entryType.type        
    cardContentDiv.append(cardSpan)

    const cardParagraph = document.createElement("p")
    cardParagraph.innerText = e.input
    cardContentDiv.append(cardParagraph)
 
    if (e.entryType.type === "emote") {
        const cardEmoteImg = document.createElement("img")
        cardEmoteImg.class = "face_img"
        cardEmoteImg.src = `img/${e.input}_face.png`
        //image component if statement to append(src)
        cardContentDiv.append(cardEmoteImg)
    }


    const cardheader = document.createElement("h6")
    cardheader.setAttribute("class", "card-title")
    cardheader.innerText = new Date(JSON.parse(e.timestamp));    cardContentDiv.append(cardheader);
}
module.exports = cardComponent