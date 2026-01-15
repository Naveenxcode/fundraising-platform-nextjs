"use server"

import payment from "@/model/payment"
import connectDb from "@/db/connectDb"
import User from "@/model/User"
import Razorpay from "razorpay"

console.log("KEY_ID:", process.env.NEXT_PUBLIC_KEY_ID)
console.log("KEY_SECRET:", process.env.KEY_SECRET)

export const initiate = async (amount, to_username, paymentform)=>{
    await connectDb()
    let user = await User.findOne({username: to_username})
    var instance = new Razorpay({key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.KEY_SECRET})
    let options = {
        amount : Number.parseInt(amount),
        currency : "INR"
    }

    let x =await instance.orders.create(options)
    await payment.create({oid: x.id, amount: amount/100, to_user: to_username, name : paymentform.name, message: paymentform.message})

    return x 
} 

export const fetchpaydata =async (username)=>{
    await connectDb()
    let data = await payment.find({to_user: username, done: true}).sort({amount:-1}).lean()
    return data;
}

export const updateProfile = async (data, oldusername)=>{
    await connectDb()
    let ndata = Object.fromEntries(data) 

    if(oldusername !== ndata.username){
        let u = await User.findOne({usename: ndata.username})
        if(u){ 
            return {error: "username is exist "}
        }
        await User.updateOne({email: ndata.email}, ndata)
        
        await payment.updateMany({to_user: oldusername}, {to_user: ndata.username}) 
    }
    else {
        await User.findOne({usename: ndata.username})
    }
}