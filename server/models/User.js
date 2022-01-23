import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        isRequired : true
    },
    username : {
        type : String,
        isRequired : true
    },
    password : {
        type : String,
        min : 6,
        isRequired : true
    }
    
},{ timestamps: true })

export default mongoose.model('User', UserSchema);