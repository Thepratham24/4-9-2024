const mongoose = require("mongoose");
const { Schema }= mongoose;
//yha pe schema bna rhe hai jisek according database ma data store hoga
const Userschema = new Schema({
        name:{
            type: String,
            required : true
        },
        location:{
            type: String,
            required : true
        },
        email:{
            type: String,
            required : true
        },
        password:{
            type: String,
            required : true
        },
        
        date:{
            type: Date,
            default: Date.now
        }
        
    }
);

//user name ka collection database me store hojayega automatically iss se
//model ki help se data insert hoyega collection me user naam ka bnega amd jha pe model import krenge vha pe data ka crud operations kr skege
module.exports = mongoose.model('user', Userschema) ;