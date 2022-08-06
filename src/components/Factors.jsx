import React from 'react'
import Consult from "../assets/pic/Consultweb.svg";
import Book from "../assets/pic/Bookweb.svg";
import Thyroidweb from "../assets/pic/Thyroidweb.png";

function Factors() {
    return (
        <div className='bg-white py-[50px] w-full'>
            <div className='flex w-11/12 mx-auto flex-col-reverse md:flex-row justify-between gap-2'>
                <div className='flex flex-col md:w-[45%] justify-center text-[#373750] gap-4 '>
                    <h2 className='text-xl md:text-2xl xl:text-4xl font-bold pb-3'>
                        95%+ Hypothyroidism is caused by one of the 3 underlyig factors
                    </h2>
                    <p className='text-base md:text-xl font-semibold '>
                        1. Hahiimoto's
                    </p>
                    <p className='text-base md:text-xl font-semibold'>
                        2. HPA Axis Dysfunction
                    </p>
                    <p className='text-base md:text-xl font-semibold'>
                        3. Estrogen Excess
                    </p>
                    <p className='py-3 text-xs md:text-sm font-semibold'>
                        These root causes are treatable. Book a thyroid root cause panel to find your clinical root cause and begin personalised treatment.
                    </p>
                    <div className='flex flex-col items-center md:items-start xl:flex-row gap-4'>
                        <img className='w-[280px] h-[40px] md:h-[65px]' alt='' src={Consult} />
                        <img className='w-[280px] h-[40px] md:h-[65px]' alt='' src={Book} />
                    </div>
                </div>
                <div className='md:w-[50%] flex justify-end items-center'>
                    <img className='w-full md:w-[400px] xl:w-[490px] h-[250px] md:h-[500px]' alt='' src={Thyroidweb} />

                </div>
            </div>


        </div>
    )
}

export default Factors