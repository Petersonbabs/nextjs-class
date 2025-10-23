import mongoose from "mongoose";
const mongodbUri = process.env.MONGODB_URI
const connectDb = async () => {
    try {
        const connected = await mongoose.connect(mongodbUri)
        if (connected) {
            console.log("DB 😎")
        }
    } catch (error) {
        console.log(error)
    }
}

export default connectDb