import React from 'react';
import Image from 'next/image';
import Main from '../components/main.js';
export default function Navbar() {
 return (

    <>

   <div className=''>

    <div className='fixed top-2 space-x-2 space-y-4 text-center pl-48'>
        <h1 className='font-abc  text-xl text-center h-12 pt-2 bg-opacity-40 space-x-4 px-3 text-opacity-100  '> $7,500 tax credit for Model Y and Model 3. Model 3 RWD credit reducing to $3,750 on April 18
        <a href="https://www.tesla.com/support/incentives" className='inline hover:text-blue-600 underline cursor-pointer overflow-hidden '> Learn more  </a>
 </h1>
 
 </div>
 <div className=" pt-4  fixed top-4  mt-10 ">
 <a href="#" className=' text-3xl pl-4 pr-8 '> TESLA  </a>
 <a href="#" className='text-xl pr-1 ml-16 pl-6  hover:bg-slate-300 hover:rounded hover:bg-opacity-30 hover:px-2  hover:text-center hover:py-1'>Model S  </a>
 <a href="#" className='text-xl pr-2 pl-5 ml-1 hover:bg-slate-300 hover:rounded hover:bg-opacity-30 hover:px-2  hover:py-1'> Model 3  </a>
 <a href="#" className='text-xl pr-2 pl-5 hover:bg-slate-300 hover:rounded hover:bg-opacity-30 hover:px-2  hover:py-1' >Model X </a>
 <a href="#" className='text-xl pr-2 pl-5 hover:bg-slate-300 hover:rounded hover:bg-opacity-30 hover:px-2 hover:py-1'>Model Y </a>
 <a href="#" className='text-xl pr-2 pl-5 hover:bg-slate-300 hover:rounded hover:bg-opacity-30 hover:px-2  hover:py-1'> Solar panels </a>
 <a href="#" className='text-xl pr-2 pl-5 hover:bg-slate-300 hover:rounded hover:bg-opacity-30 hover:px-2  hover:py-1'> Solar Roofs </a>
 <a href="#" className='text-xl pr-2 pl-5 hover:bg-slate-300 hover:rounded hover:bg-opacity-30 hover:px-2  hover:py-1'> Powerwall</a>
 <a href="#" className='text-xl pr-2 pl-5 ml-4 hover:bg-slate-300 hover:rounded hover:bg-opacity-30 hover:px-2  hover:py-1'> Shop </a>
 <a href="#" className='text-xl pr-2 pl-4 hover:bg-slate-300 hover:rounded hover:bg-opacity-30 hover:px-2 hover:py-1'> Account </a>
 <a href="#" className='text-xl pr-2 pl-4 hover:bg-slate-300 hover:rounded hover:bg-opacity-30 hover:px-2  hover:py-1'> Menu</a>

 </div>
 
 
 <div className='pt-6'>
 <Image className='h-[700px] w-[900px] mix-blend-overlay absolute' src="/1.webp" alt="" height={200}  width={300}/>
 <h1 className='text-top font-thin  font-abc  pt-28 text-center text-5xl '>
Model Y
</h1>

<div className='text-center pt-4  items-center cursor-pointer text-normal'>
<a href="#" className='text-xl text-center pt-10 bg-transparent  items-center cursor-pointer text-normal overflow-hidden text-top font-abc underline' >
  view inventory
</a>
 </div>
 
 <div className='flex font-thin'>
  <div className='pt-10 pl-72  mt-96'>
<button className= 'ml-30 pl-24 text-center mt-10 bg-opacity-100 hover:bg-white mr-24 text-white bg-black py-2 rounded px-20'>
  Order Now
</button>
</div>

<div className='pt-20'>
<button className= 'pl-24 ml-30 bg-blue-500 mt-96 font-bold bg-opacity-100 hover:bg-white border-black  text-black py-2 rounded px-16'>
 Demo Drive
</button>
</div>

</div>
</div>



   </div>
   <Main/>
   </>
 )
}