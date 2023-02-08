var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReviewsSchema = new Schema({
    name : String,
    rating : Number,
    message : String
})

module.exports = {
    "reviews" : mongoose.model('reviews', ReviewsSchema)
}