import mongoose from 'mongoose';

// Defining the schema for KTU users

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


// Creating the model from the schema
const KtuUser = mongoose.model('KtuUser', ktuSchema);

export default KtuUser;