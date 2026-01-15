import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github"
import User from "@/model/User.js" 
// import payment from '@/model/payment'
import mongoose from 'mongoose'
// import connectDb from '@/db/connectDb' 

export const auth = NextAuth ({
    providers:[
        GitHubProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET
        })
    ],
    callbacks:{
        async signIn({account,user}){
            if(account.provider =="github"){
                // await connectDb()
                await mongoose.connect('mongodb://localhost:27017/Donate')
                const currentuser = await User.findOne({email: user.email});
                console.log(currentuser);
                if (!currentuser){ 
                    const newUser = await User.create({
                        email:  user.email,
                        username:  user.email.split("@")[0], 
                    })
                    user.name = newUser.username
                    console.log("New user created:", newUser)
                }
                
            }
            return true;

            
            
        },
       
        async session ({session}){
            const userDb = await User.findOne({email: session.user.email});
            session.user.name = userDb.username
            return session 
        }
    }

})


export {auth as GET , auth as POST} 


