const $ = require("jquery")
 
const userManager = Object.create(null, {

    // get all users
    getAllusers: {
        value: function () {
            return $.ajax("http://localhost:8088/users")
        }
    },
    // get single user
    getSingleusers: {
        value: function (id) {
            return $.ajax(`http://localhost:8088/users/${id}`)
        }
    },
    // post (create) user
    createUsers: {
        value: function (Users) {
            return $.ajax({
                url: "http://localhost:8088/users",
                method: "POST",
                data: Users
            })
        }
    },
    // delete user
    deleteusers: {
        value: function (id) {
            return $.ajax({
                url: `http://localhost:8088/users/${id}`,
                method: "DELETE"
            })
        }
    },
    //  put (update) user
    updateusers: {
        value: function (Users) {
            return $.ajax({
                url: `http://localhost:8088/users/${Users.id}`,
                method: "PUT",
                data:Users
            })
        }
    }
})

module.exports = userManager