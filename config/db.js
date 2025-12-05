import mongoose from "mongoose";

const connectdb = async ()=>{
    try {

        let connect = await mongoose.connect(process.env.Mongo_url )
        console.log("database connected")
    } catch (error) {

        console.log( error?.message)
        
    }
}

export default connectdb