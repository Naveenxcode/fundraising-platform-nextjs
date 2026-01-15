export default function Footer(){

    const thisyear = new Date().getFullYear() 

    return(
 
        <>
        <div className='h-[10vh] flex justify-center items-center bg-gray-900'>
        <p> copyright &copy; {thisyear} Get me a chai!- All rights reserved </p>
        </div>
        </>
    )
}

