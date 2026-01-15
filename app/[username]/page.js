import React from "react"
import Paymentpage from "@/components/Paymentpage";

export default async function Username({ params }){
  // console.log("PARAMS:", params);
  const {username} =await params
  console.log(username)
    return(
       <> 
        <Paymentpage username={username}/>
       </> 
    )
}

