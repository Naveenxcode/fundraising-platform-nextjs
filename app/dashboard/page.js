"use client"

import React, { useEffect,useState } from "react" 
import { useRouter } from 'next/navigation' 
import { useSession } from 'next-auth/react'
import {updateProfile} from "@/action/useractions" 
  

function Dashboard() {
  const { data: session } = useSession()
  const router = useRouter()
  if (!session) {
    router.push('/login')
  }

  const [form, setform] = useState({})


  const handleChange=(e)=>{
    setform({...form, [e.target.name]: e.target.value})
    // console.log(form)
  }

 const handleSubmit = async (formdata)=>{
  console.log(session.user.name)
  let a = await updateProfile(formdata, session.user.name)
  alert("Profile Updated") 
 }

  // useEffect(()=>{ 
  //  // if (!session) {
  //  // router.push('/login')}
   
  // },[])

  return (
    <div className=' py-7'>
      <div className="dashboard mx-auto w-[45vw] min-h-[45vh] py-7 bg-slate-900 rounded rounded-lg "> 

        <h1 className="font-bold text-[20px] px-5 mx-auto">Welcome to your DashBoard</h1> 

        <form action={handleSubmit}>
          <div className='my-2'>
          <p className='mx-6 px-2'>Name :</p>
          <input name="name" value={form.name} onChange={handleChange}  className='p-1.5 bg-slate-700 text-white  w-[630] border border-1 mx-6 my-1 border-white rounded rounded-lg' placeholder="Enter your Name"  type="text" />
        </div>  
        <div className='my-2'>
          <p className='mx-6 px-2'>Email :</p>
          <input name="email" onChange={handleChange}  className='p-1.5 bg-slate-700 text-white  w-[630] border border-1 mx-6 my-1 border-white rounded rounded-lg' placeholder="Enter your Email"  value={session.user.email} type="text" />
        </div>
        <div className='my-2'>
          <p className='mx-6 px-2'>Username :</p>
          <input name="username" value={form.username} onChange={handleChange} className='p-1.5 bg-slate-700 text-white  w-[630] border border-1 mx-6 my-1 border-white rounded rounded-lg' placeholder="Enter your username" type="text" />
        </div>
        <div className='my-2'>
          <p className='mx-6 px-2'>profilepic :</p>
          <input name="profilepic" value={form.profilepic} onChange={handleChange} className='p-1.5 bg-slate-700 text-white w-[630] border border-1 mx-6 my-1 border-white rounded rounded-lg' placeholder="Enter your Prifile Pic URL " type="text" />
        </div>
        <div className='my-2'>
          <p className='mx-6 px-2'>coverpic :</p>
          <input name="coverpic" value={form.coverpic} onChange={handleChange} className='p-1.5 bg-slate-700 text-white w-[630] border border-1 mx-6 my-1 border-white rounded rounded-lg' placeholder="Enter your cover Pic URL" type="text" />
        </div>
        <div className='my-2'>
          <p className='mx-6 px-2'>razorpayId :</p>
          <input name="razorpayId" value={form.razorpayId} onChange={handleChange} className='p-1.5 bg-slate-700 text-white w-[630] border border-1 mx-6 my-1 border-white rounded rounded-lg' placeholder="Enter your razorpay Id" type="text" />
        </div>
        <div className='my-2'>
          <p className='mx-6 px-2'>razorpaySecret :</p>
          <input name="razorpaySecret" value={form.razorpaySecret} onChange={handleChange} className='p-1.5 bg-slate-700 text-white w-[630] border border-1 mx-6 my-1 border-white rounded rounded-lg' placeholder="Enter your razorpay Secret" type="text" />
        </div>
       
        
     
        <button type="submit" className='p-2 mx-6  w-[630] rounded rounder-lg text-black my-1 bg-slate-200 cursor-pointer px-18 font-bold py-2'> Save </button>

        </form>
    </div>
    </div>
  )
}

export default Dashboard 
