const loginComponent = require("./login")
const registerComponent = require("./register")
const journalComponent = require("./entries/journal")
const listComponent = require("./entries/list")
const emoteComponent = require("./entries/emote")
const logoutComponent = require("./logout")

loginComponent()
registerComponent()
emoteComponent()
listComponent()
journalComponent()

logoutComponent()