import React from "react";
import { InView } from 'react-intersection-observer';

export default function Main(){

    return(
        <>
         <InView>
    {({ inView, ref, entry }) => (
      <div ref={ref}>
        <h2>{`Header inside viewport ${inView}.`}</h2>
      </div>
    )}
 
        {/* 2nd image  */}
        <div className='pt-6'>
            <img className='h-[700px] w-[1200px] mix-blend-overlay pl-28 pt-10 absolute' src="/2.jpg" alt="" height={200} width={300} />
            <h1 className='text-top font-thin  font-abc  pt-12 text-center text-5xl '>
                Model 3
            </h1>

            <div className='text-center pt-4  items-center cursor-pointer text-normal'>
                <a className='text-xl text-center pt-10  items-center cursor-pointer text-normal text-top font-serif ' href='#'>
                    Leasing starting at $349/month
                </a>
            </div>

            <div className='flex font-thin'>
                <div className='pt-10 pl-72  mt-96'>
                    <button className='ml-30 pl-24 text-center mt-10 bg-opacity-100 hover:bg-white mr-24 text-white bg-black py-2 rounded px-20'>
                        Order Now
                    </button>
                </div>

                <div className='pt-20'>
                    <button className='pl-24 ml-30 bg-blue-300 mt-96 font-thin bg-opacity-100 hover:bg-white border-black  text-black py-2 rounded px-16'>
                        Demo Drive
                    </button>
                </div>

            </div>
        </div>
        
        {/* 3rd image */}
        <div className='pt-6 text-red-600  focus-visible:'>
                <img className='h-[700px] w-[1200px] mix-blend-overlay pl-28 pt-10 absolute' src="/3.jpg" alt="" height={200} width={300} />
                <h1 className='text-top font-thin  bg-white font-abc  pt-12 text-center text-5xl '>
                    Model 3
                </h1>

                <div className='text-center pt-4  bg-white items-center cursor-pointer text-normal'>
                    <a className='text-xl text-center pt-6 pb-4  items-center cursor-pointer text-normal text-top font-serif ' href='#'>
                        Leasing starting at $349/month
                    </a>
                </div>

                <div className='flex font-thin'>
                    <div className='pt-20 pl-72  mt-96'>
                        <button className='ml-30 pl-24 text-center mt-10 bg-opacity-100 hover:bg-white mr-24 text-white bg-black py-2 rounded px-20'>
                            Order Now
                        </button>
                    </div>

                    <div className='pt-32'>
                        <button className='pl-24 ml-30 bg-blue-600 mt-96 font-thin bg-opacity-100 hover:bg-white border-black  text-black py-2 rounded px-16'>
                            Demo Drive
                        </button>
                    </div>

                </div>
            </div>

 {/* image 4 */}
            <div className='pt-6'>
                <img className='h-[700px] w-[1200px] mix-blend-overlay pl-28 pt-10 absolute' src="/4.jpg" alt="" height={200} width={300} />
                <h1 className='text-top font-thin  font-abc  pt-12 text-center text-5xl '>
                    Model S
                </h1>

                <div className='text-center pt-4  items-center cursor-pointer text-normal'>
                    <a className='text-xl text-center pt-10  items-center cursor-pointer underline text-normal text-top font-serif ' href='#'>
                        view inventory
                    </a>
                </div>

                <div className='flex font-thin'>
                    <div className='pt-20 pl-72  mt-96'>
                        <button className='ml-30 pl-24 text-center mt-10 bg-opacity-100 hover:bg-white mr-24 text-white bg-black py-2 rounded px-20'>
                            Order Now
                        </button>
                    </div>

                    <div className='pt-32'>
                        <button className='pl-24 ml-30 bg-blue-500 mt-96 font-sans font-bold bg-opacity-100 hover:bg-white border-black  text-black py-2 rounded px-16'>
                            Demo Drive
                        </button>
                    </div>

                </div>
            </div>
            
            {/* image 5 */}

            <div className='pt-6'>
                <img className='h-[700px] w-[1200px] mix-blend-overlay pl-28 pt-10 absolute' src="/5.jpg" alt="" height={200} width={300} />
                <h1 className='text-top font-thin  font-abc  pt-12 text-center text-5xl '>
                Solar Panels
                </h1>

                <div className='text-center pt-4  items-center cursor-pointer text-normal'>
                    <a className='text-xl text-center pt-10  items-center cursor-pointer underline text-normal text-top font-serif ' href='#'>
                    Lowest Cost Solar Panels in America
                    </a>
                </div>

                <div className='flex font-thin'>
                    <div className='pt-20 pl-72  mt-96'>
                        <button className='ml-30 pl-24 text-center mt-10 bg-opacity-100 hover:bg-white mr-24 text-white bg-black py-2 rounded px-20'>
                            Order Now
                        </button>
                    </div>

                    <div className='pt-32'>
                        <button className='pl-24 ml-30 bg-blue-400 mt-96 font-sans font-bold bg-opacity-100 hover:bg-white border-black  text-black py-2 rounded px-16'>
                           Learn more
                        </button>
                    </div>

                </div>
            </div>
            
            {/* image 6  */}

            <div className='pt-6 text-white font-bold'>
                <img className='h-[700px] w-[1200px] mix-blend-overlay pl-28 pt-10 absolute' src="/6.jpg" alt="" height={200} width={300} />
                <h1 className='text-top font-thin  font-abc  pt-12 text-center text-5xl '>
                Solar Roof
                </h1>

                <div className='text-center pt-4  items-center cursor-pointer text-normal'>
                    <a className='text-xl text-center pt-10  items-center cursor-pointer e text-normal text-top font-abc ' href='#'>
                    Produce Clean Energy From Your Roof
                    </a>
                </div>

                <div className='flex font-thin'>
                    <div className='pt-20 pl-72  mt-96'>
                        <button className='ml-30 pl-24 text-center mt-10 bg-opacity-100 hover:bg-white mr-24 text-white bg-black py-2 rounded px-20'>
                            Order Now
                        </button>
                    </div>

                    <div className='pt-32'>
                        <button className='pl-24 ml-30 bg-blue-500 mt-96 font-sans font-bold bg-opacity-100 hover:bg-white border-black  text-black py-2 rounded px-16'>
                           Learn More
                        </button>
                    </div>

                </div>
            </div>
 {/* image last 
 */}
            <div className='pt-6 text-black font-bold'>
                <img className='h-[600px] w-[1000px] mix-blend-overlay pl-56 pt-40 absolute' src="/8.jpg" alt="" height={200} width={300} />
                <h1 className='text-top font-thin  font-abc  pt-12 text-center text-5xl '>
                Accessories
                </h1>

                <div className='flex  pt-20 pl-64 font-thin'>
                    <div className='pt-20 pl-72  mt-96'>
                        <button className='ml-30 pl-24 text-center mt-10 bg-opacity-100  mr-24 text-white bg-black py-2 rounded px-20'>
                            Shop Now
                        </button>
                    </div>

                   

                </div>
            </div>
            </InView>
 <div className="flex justify-between text-center items-center ml-32 mr-52 text-xl font-abc  font-bold pt-12 mb-6 ">
    <a className=""      href="#">
    Tesla © 2023

    </a>
    <a href="#" className="">
    Privacy & Legal

    </a>
    <a href="# "className="">
    Vehicle Recalls

    </a>
    <a href="#">
    Contact

    </a>
    <a className=""  href="#">
    Careers

    </a>
    <a className="" href="#">
    News

    </a>

    <a className="" href="#">
 Enagage

    </a>
 </div>

 <div className="text-center items-center">
 <a href="https://www.linkedin.com/in/vishal-mishra-769384257/" className="text-2xl underline overflow-hidden  pt-5 mb-5 text-center">
    meet the developer❤️
 </a>
 </div>

            </>
    )
}