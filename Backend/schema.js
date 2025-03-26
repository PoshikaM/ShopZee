const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    id : { type : Number, required : true, unique : true },
    name : String,
    brand : String,
    category : String,
    price : Number,
    description : String,
    image : String,
    reviews : {
        type: [String],
        default: []
      }
})

module.exports = productSchema;