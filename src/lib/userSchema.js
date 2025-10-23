import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true },
    image: String,
    provider: {type: String, enum: ["google", "github", "linkedin"]},
    gender: String
})

export default mongoose.model("User", userSchema)