const $ = require("jquery")

const entryManager = Object.create(null, {
    //get all entries
    getAllEntries: {
        value: function() {
            return $.ajax("http://localhost:8088/entries") 
        }
    }, 
    getAllEntriesFromSingleUser: {
        value: function(id) {
            return $.ajax(`http://localhost:8088/entries/?userId=${id}&_expand=entryType`)
        }
    },
    //get single entry
    getSingleEntry: {
        value: function(id){
            return $.ajax(`http://localhost:8088/entries/${id}`)
        }
    },
    //post entry to database
    createEntry: {
        value: function(entry){
            return $.ajax({
                url: "http://localhost:8088/entries",
                method: "POST",
                data: entry
            })
        }
    },
    //delete entry
    deleteEntry: {
        value: function(id){
            return $.ajax({
                url: `http://localhost:8088/entries/${id}`,
                method: "DELETE"
            })
        }
    },
    //put (update) user
    updateEntry: {
        value: function(Entries){
            return $.ajax({
                url: `http://localhost:8088/entries/${Entries.id}`,
                method: "PUT",
                data: Entries
            })
        }
    }
})

module.exports = entryManager