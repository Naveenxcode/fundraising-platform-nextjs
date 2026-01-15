"use client"

import {signIn} from 'next-auth/react'
import { useSession, update } from 'next-auth/react'
import {useRouter}  from 'next/navigation'
import { useEffect } from "react"



export default function Login() {
        const {data: session} = useSession()
        const router = useRouter()
        if (session){
        router.push('/dashboard')
        console.log(session.user.name)
        }

        

        // useEffect(()=>{if (session){
        // router.push('/dashboard')
        // }},[])

    return (
        <>
            <div className="text-xl font-bold container mx-auto text-center ">
                <p className='p-4'>LogIn here to get your fan to support you</p>
            </div>


            <div className="flex flex-col justify-center items-center gap-1.5">

                <button onClick={()=>{signIn("github")}} type="button" className='flex min-w-[220px] p-2 gap-2  hover:bg-slate-300  rounded rounder-lg text-black my-1 bg-slate-200 cursor-pointer px-4 font-bold py-2'><img width={20} src="/github.svg" alt="" /> LogIn with GitHub </button>
                <button onClick={()=>{signIn("github")}} type="button" className='flex min-w-[220px]  p-2 gap-2 hover:bg-slate-300 rounded rounder-lg text-black my-1 bg-slate-200 cursor-pointer px-4 font-bold py-2'><img width={20} src="/google.svg" alt="" /> LogIn with Google </button>
                <button onClick={()=>{signIn("github")}} type="button" className='flex min-w-[220px]  p-2 gap-2 hover:bg-slate-300 rounded rounder-lg text-black my-1 bg-slate-200 cursor-pointer px-4 font-bold py-2'><img width={20} src="/linkedIn.svg" alt="" /> LogIn with LinkedIn </button>
                <button onClick={()=>{signIn("github")}} type="button" className='flex min-w-[220px] p-2 gap-2 hover:bg-slate-300 rounded rounder-lg text-black my-1 bg-slate-200 cursor-pointer px-4 font-bold py-2'><img width={20} src="/twitter.svg" alt="" /> LogIn with Twitter </button>
                <button onClick={()=>{signIn("github")}} type="button" className='flex min-w-[220px] p-2 gap-2 hover:bg-slate-300 rounded rounder-lg text-black my-1 bg-slate-200 cursor-pointer px-4 font-bold py-2'><img width={20} src="/apple.svg" alt="" /> LogIn with Apple </button>

                
                {/* <button onClick={()=>{signIn("github")}} type="button" className=" cursor-pointer text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                  LogIn with GitHub</button> */}

            </div>
        </>
    )
}