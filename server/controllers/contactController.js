const Contact=require("../models/contactModel");
const contact=async(req, res, next)=>{
    try{
        const responsedata=new Contact(req.body);
        const msg=await Contact.findOne({message:responsedata.message});
        const email=await Contact.findOne({email:responsedata.email});
        if(msg && email){
            return res.status(400).json({ message: "This message already send by you" });
        }
        const data=await responsedata.save();
        res.status(200).json({message:"Message sent success"});
    }catch(err){
        next(err);
    }
};
module.exports=contact;