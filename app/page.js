import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" flex flex-col gap-3 justify-center items-center h-[50vh] ">
        <h1 className=" text-[40px] font-bold"> Buy me a Chai !</h1>
        <span> A croudfunding Platform for Creaters | Get funded by your fans and followers... Start Now </span>
        <div className="flex gap-4">
          <button type="button" className="text-white bg-gradient-to-br cursor-pointer from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-4 py-2.5 text-center leading-5"> Start Here</button>
          <button type="button" className="text-white bg-gradient-to-br cursor-pointer from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-4 py-2.5 text-center leading-5"> Read More  &gt; &gt;</button>
        </div>
      </div>


      {/* <div className="h-[.5vh] bg-red-200"></div> */}


      <div className='flex justify-center font-bold text-xl'> <span className='py- font-bold'>Your Fans can buy U a Chai </span></div>


      <div className=" flex items-center justify-center gap-8 ">
        <div className='flex flex-col items-center gap-2 px-20 py-15'>
          <img src="/man.gif" width={80} className='bg-gray-100 rounded-full' alt=""/>
          <p className='font-bold '> Fans wants to help </p> 
          <p className='text-[14px]'> Fans are available to help you </p>
        </div>
        <div className='flex flex-col items-center gap-2 px-20 py-15'>
          <img src="/coin.gif" width={80} className='bg-gray-100 rounded-full' alt="" />
          <p className='font-bold '> Fans wants to help</p>
          <p  className='text-[14px]'> Fans are available to help you </p>
        </div>
        <div className='flex flex-col items-center gap-2 px-20 py-15'>
          <img src="/group.gif" width={80} className='bg-gray-100 rounded-full' alt="" />
          <p className='font-bold '>Fans wants to help</p>
          <p  className='text-[14px]' >Fans are available to help you </p>
        </div>
      </div>


      <div className=" flex flex-col itmes-center justify-center w-[500px]">
        <h1 className='text-xl'>Learn More about this croudfunding </h1>
        {/* <iframe width="460" height="315" src="https://www.youtube.com/embed/Rni7Fz7208c?si=j_EewHSrJ1F6QHU2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
      </div>
    </>
  );
}
