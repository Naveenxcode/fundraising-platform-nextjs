"use client"

import React, { useEffect, useState} from 'react'
import { initiate, fetchpaydata } from '@/action/useractions'
import Script from 'next/script'
import { useSearchParams, useRouter } from 'next/navigation'



const Paymentpage = ({ username }) => {
    const [paymentform, setPaymentform] = useState({ name: "", message: "", amount: "" })
    const [paymentdb, setPaymentdb] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()



    


    useEffect(() => {
        getData();
        console.log(paymentdb)
    }, [])

    const totalPay =()=>{ paymentdb(i=>i.amount)}
    const getData = async () => {
        let paydata = await fetchpaydata(username)
        // let data = paydata[0]
        setPaymentdb(paydata)
        console.log(paydata, Array.isArray(paydata))
    }


    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }


    const pay = async (amount) => {
        //get the order Id 

        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": a.amount, // Amount is in currency subunits. 
            "currency": "INR",
            "name": "Get Me a Chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Naveen Kumar", //your customer's name
                "email": "naveen.kumar@example.com",
                "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };

        var rzp1 = new window.Razorpay(options);
        rzp1.open();

        console.log("ORDER AMOUNT:", a.amount)
        console.log("CHECKOUT AMOUNT:", options.amount)

    }

    return (
        <>
            

            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <div className="relative h-[50vh] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-center bg-cover"
                    style={{ backgroundImage: "url('/hack2.jpg')" }}
                ></div>
                <div className="absolute inset-0 bg-black/40"></div>



            </div>
            <div className="absolute bg-black top-97 right-175 border border-4 p-4 border-white rounded-full">
                <img className="w-[80]" src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/2534725/9ebe33b6cf514e958f519c31d7da2a7e/eyJ3Ijo5NjAsIndlIjoxfQ%3D%3D/2.png?token-hash=qD_hM-9La1I0bqhm6ir4u8QqbNZXw7LRx0ElWlcjkFs%3D&token-time=1767484800" alt="" />

            </div>
            <div className='py-20 top-30 flex flex-col justify-center items-center '>
                <h1 className='text-[30px] font-bold'>@{username} the Coder</h1>
                <h2>Bugs are just puzzles in disguise, waiting to be solved</h2>
                <p className="py-4">{paymentdb.length} fans donated || Total Donation: ₹{paymentdb.reduce((sum,i)=> sum + Number(i.amount), 0)} </p> 
                <button className=' rounded rounder-lg text-black my-1 bg-white px-18 font-bold py-2'> Join for Free</button>
                <button className=' rounded rounder-lg bg-slate-900 my-1 px-9  py-2.5'> See Membership Option</button>

            </div>
            <div className='my-5 flex gap-5 items-center justify-center'>
                <div className="w-[45vw] min-h-[45vh] bg-slate-900 rounded rounded-lg">
                    <h1 className="font-bold p-5  ">Supporter: </h1>
                    <ul>
                        {paymentdb.slice(0,6).map((p, i) => {
                            return <li key={i} className="px-6 py-1.5">{p.name} donated ₹{p.amount} with a message "{p.message}"</li>
                        })}
                    </ul>
                    <span className="p-5"> {paymentdb.length - 6 } donation more...</span>


                </div>
                <div className="payment  w-[45vw] min-h-[45vh] bg-slate-900 rounded rounded-lg ">
                    <h1 className="font-bold p-5">Make A Payment</h1>
                    <input onChange={handleChange} name="name" value={paymentform.name} className='p-2  w-[630] border border-2 mx-6 my-3 border-white rounded rounded-lg' placeholder="Enter Your Name" type="text" />
                    <input onChange={handleChange} name="message" value={paymentform.message} className='p-2  w-[630] border border-2 mx-6 my-3 border-white rounded rounded-lg' placeholder="Message for your Creator" type="text" />
                    <div>
                        <input onChange={handleChange} name="amount" value={paymentform.amount} className='p-2  w-[320] border border-2 mx-6 my-3 border-white rounded rounded-lg' placeholder="Amount U Want to Pay" type="text" />
                        <button className="bg-slate-800 p-2 rounded rounded-lg border border-white border-2 mx-2 " onClick={() => { pay(1000) }} >Pay $10</button>
                        <button className="bg-slate-800 p-2 rounded rounded-lg border border-white border-2 mx-2 " onClick={() => { pay(2000) }} >Pay $20</button>
                        <button className="bg-slate-800 p-2 rounded rounded-lg border border-white border-2 mx-2 " onClick={() => { pay(3000) }} >Pay $30</button>
                    </div>
                    <button disabled={paymentform.amount?.length < 3 || paymentform.message?.length < 3} onClick={() => { pay(Number.parseInt(paymentform.amount) * 100) }} className='disabled:bg-slate-600 p-2 mx-6 w-[630] rounded rounder-lg text-black my-1 bg-slate-200 cursor-pointer px-18 font-bold py-2'> Pay</button>

                </div>

            </div>
        </>
    )
}

export default Paymentpage
