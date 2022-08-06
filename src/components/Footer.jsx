import React from 'react'
import talk from "../assets/pic/talk.svg";


function Footer() {
    return (
        <div className='bg-[#373750] md:w-full flex flex-col justify-center items-center gap-4 py-12'>
            <h2 className='text-white px-8 md:px-0 text-2xl md:text-3xl'>
                Have any questions? Book a call with us
            </h2>
            <img src={talk} alt="" className='w-[200px]' />
        </div>
    )
}

export default Footer