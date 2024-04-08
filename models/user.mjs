import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    address:{
        type:String
    },
    mobileNumber:{
        type:String
    }
});
export default mongoose.model('user',userSchema);