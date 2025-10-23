import mongoose, { models } from "mongoose";
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true },
    image: String,
    provider: { type: String, enum: ["google", "github", "linkedin"] },
    gender: String,
    password: { type: String, select: false }
})

export default models.Users || mongoose.model("Users", userSchema)