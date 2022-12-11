const mongoose = require('mongoose');

const Schema = mongoose.Schema

const bookSchema = new Schema({
        name :{
            type :String,
            required :true
        },
        author: {
            type:String,
            required : true
        },
        description : {
            type: String,
            required: true
        },
        price : {
            type: Number,
            required :true
        },
        available : {
            type : Boolean,
        },
        image : {
            type : String,
            required: true
        },
        purchase_link : {
            type :String,
            required :true
        }

})

module.exports = mongoose.model("Book",bookSchema);

//evry single data is one book with details of bookSchema