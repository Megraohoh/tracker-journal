const $ = require("jquery")

const userSettingsManager = Object.create(null, {
    //get all settings
    getAllSettings: {
        value: function () {
            return $.ajax("http://localhost:8088/settings")
        }
    },
    //get single setting
    getSingleUserSettings: {
        value: function (id) {
            return $.ajax(`http://localhost:8088/settings?userId=${id}`)
        }
    },
    //update user setting
    updateusersettings: {
        value: function (User) {
            return $.ajax({
                url: `http://localhost:8088/settings/${User.id}`,
                method: "PUT",
                data: User
            })
        }
    }
})
module.exports = userSettingsManager