import React from 'react'
import Phone12 from "../assets/pic/Phone12.png";
import Phone from "../assets/pic/Phone.png";



function Need() {
    return (
        <div className='w-full bg-white py-10'>
            <div className='flex w-11/12 flex-col xl:flex-row items-center justify-center xl:justify-between gap-7 xl:gap-0 md:w-10/12 xl:w-9/12 mx-auto'>
                <div className='flex flex-col gap-3 text-[#373750] w-full xl:w-[45%]'>
                    <h2 className='text-3xl font-semibold'>
                        One place for all your Thyroid needs
                    </h2>
                    <p className='text-base text-gray-500'>
                        Join life fitness sessions, talk to your nutrition coach or consult top thyroid expert in India, track your thyroid symptoms, watch live webinar & explored thyroid related content, video and recipes.
                    </p>
                </div>
                <div className='flex  gap-2 w-full xl:w-1/2 justify-center'>
                    <img src={Phone12} className="h-[300px] md:h-[450px] w-[150px] md:w-[220px]" />
                    <img src={Phone} className="h-[300px] md:h-[450px] w-[150px] md:w-[220px]" />
                </div>
            </div>

        </div>
    )
}

export default Need