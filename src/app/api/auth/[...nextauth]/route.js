import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import connectDb from "@/lib/mongodb";
import userSchema from "@/lib/userSchema";

// 1. Set Up Google creadentials, Oatuh, Consent Screen 
// 2. Saved clientId and client secret
// 3. Set up next-auth route for Authentication Provider



const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        signIn: async ({ user }) => {
            await connectDb()
            const existingUser = await userSchema.findOne({ email: user.email })
            if (!existingUser) {
                await userSchema.create({
                    email: user.email,
                    name: user.name,
                    provider: user.provider,
                    gender: user.gender,
                    image: user.image
                })
                console.log(`New account created for ${user.email}`)
            }

            return true
        }
    },
    secret: process.env.NEXT_AUTH_SECRET
})

export { handler as GET, handler as POST };