import mongoose from 'mongoose';

const ktuSchema = mongoose.Schema({
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    isCompleted : {
        type : Boolean,
        default : false,
    }
})

const KtuUser = mongoose.model('KtuUser', ktuSchema);

export default KtuUser;