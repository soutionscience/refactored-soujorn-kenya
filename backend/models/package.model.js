var mongoose = require('mongoose')

var Schema = mongoose.Schema

var day = new Schema({
    Title: String,
    subtitle: String,
    Image: String,
    Desc: String,
    Desc2: String,
    Hotel: String,
})

var packages = new Schema({
    Title: String,
    Image: String,
    MenuLink: String,
    Descripion: String,
    Days: [day],
    Price: Number,

})


module.exports = mongoose.model('packages', packages)