const loginComponent = require("./login")
const registerComponent = require("./register")
const journalComponent = require("./entries/journal")
const listComponent = require("./entries/list")
const emoteComponent = require("./entries/emote")


emoteComponent
listComponent()
journalComponent()
loginComponent()
registerComponent()