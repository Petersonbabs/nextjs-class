import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
// credential provider
import CredentialsProvider from "next-auth/providers/credentials";
import connectDb from "@/lib/mongodb";
import userSchema from "@/lib/userSchema";
import bcrypt from "bcryptjs"

// 1. Set Up Google creadentials, Oatuh, Consent Screen 
// 2. Saved clientId and client secret
// 3. Set up next-auth route for Authentication Provider



const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize(credentials) {
                console.log(credentials)
                await connectDb()
                const user = await userSchema.findOne({ email: credentials.email }).select("+password")
                if (!user) {
                    throw new Error("User not found")
                }
                const passwordCorrect = await bcrypt.compare(credentials.password, user.password);
                if (!passwordCorrect) {
                    throw new Error("Email or password is incorrect")
                }
                return user
            }
        })
    ],
    callbacks: {
        signIn: async ({ user }) => {
            await connectDb()
            console.log(user)
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