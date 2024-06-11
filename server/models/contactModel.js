const mongoose=require("mongoose");
const validator=require("validator");
const contactSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email format");
            }
        }
    },
    message:{
        type:String,
        required:true
    }
});
//define collection name
const Contact=new mongoose.model("contactdata", contactSchema);
module.exports=Contact;