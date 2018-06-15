const $ = require("jquery")
const EmojiPicker = require("rm-emoji-picker");
 
const picker = new EmojiPicker.default({
    show_colon_preview: false,
    positioning: "vertical",
    callback   : (emoji, category, node) => {
        hideMessage();
        currentEmoji = emoji.$emoji[0].innerText;
        selectedEmoji.innerText = currentEmoji;
        selectedEmoji.style.display = "inline";
    }
});
 
module.exports = picker 