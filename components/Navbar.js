"use client"

import Link from "next/link"
import { React, useState } from "react"
import { useSession, SignIn, signOut } from 'next-auth/react'

const Navbar = () => {
    const { data: session } = useSession()
    const [ShowDw, setShowDw] = useState(false)


    return (

        <nav className="flex justify-between item-center bg-[#111827] py-4 px-7">
            <Link href={'/'} className="">
                <span className=' text-xl'>Get me a Chai </span> </Link>
            

            <div>
                {session &&
                    <div className="relative">
                        <button id="dropdownDefaultButton" 
                        // onBlur={()=>{setTimeout(()=>{setShowDw(false)},200)}}
                        
                        onClick={() => setShowDw(!ShowDw)} data-dropdown-toggle="dropdown" class=" inline-flex cursor-pointer items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
                            Welcome {session.user.name}
                            <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" /></svg>
                        </button>   


                        <div id="dropdown" className={`z-10 ${ShowDw ? "" : "hidden"} bg-black/40 absolute bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44`}>
                            <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <Link href="/dashboard" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</Link>
                                </li>
                                <li>
                                    <Link href={`/${session.user.name}`} className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Your Page</Link>
                                </li>
                                <li>
                                    <Link href="/earnings" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</Link>
                                </li>
                            </ul>
                        </div>
                        <button onClick={()=>signOut()} type="button" className= " mx-9 text-white bg-gradient-to-br cursor-pointer from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-4 py-2.5 text-center leading-5">
                             Sign Out </button>
                    </div>
                }
                {/* {session &&
                    <button onClick={() => signOut()} type="button" className=" mx-9 text-white bg-gradient-to-br cursor-pointer from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-4 py-2.5 text-center leading-5">
                        signOut </button>} */}

                {!session &&
                    <Link href={'/login'}><button type="button" className=" mx-9 text-white bg-gradient-to-br cursor-pointer from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-4 py-2.5 text-center leading-5">
                      Log In </button> </Link>

                }
            </div>


            {/* <div className="flex gap-6 ">
                <Link href={'/'}>Home</Link>
                <Link href={'/About'}>About</Link>
                <Link href={'/Project'}>Project</Link>
                <Link href={'/login'}>LogIn</Link>
            </div> */}
        </nav>
    )
}


export default Navbar

