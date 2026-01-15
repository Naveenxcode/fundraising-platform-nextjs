import mongoose from "mongoose"

const connectDb = async ()=>{
    try{
        const mongo = await mongoose.connect("mongodb://localhost:27017/Donate");
        console.log(`mongodb connected : ${mongo.connection.host}`)
        return mongo;
    } catch(error){
        console.log(error.message);
        process.exit(1);
    }

}

export default connectDb