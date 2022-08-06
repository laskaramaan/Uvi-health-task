import React from 'react'

import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useMediaQuery from '@mui/material/useMediaQuery';

function Explain({ items }) {

    const matches = useMediaQuery('(max-width:600px)');
    return (
        // Conditons section
        <div className="flex flex-col gap-5 w-11/12 mx-auto">
            <div className="flex md:flex-row flex-col gap-3">
                <div className=" md:w-[25%] bg-[#f5e7de] flex  items-center rounded-lg ">
                    <img src={items.img} alt="" className="w-full h-[180px]" />
                </div>
                <div className="md:w-[75%] flex flex-col md:flex-row gap-4 p-4 rounded-lg bg-white">
                    <div className="flex md:flex-col w-full md:w-1/4 justify-start px-5 md:px-0 md:justify-center items-center py-2 md:py-0 bg-gray-100 rounded-lg gap-4">
                        <div className="w-[40px] md:w-[60px]">

                            <CircularProgressbarWithChildren
                                value={items.value}
                                styles={{
                                    path: {
                                        stroke: `${items.strokes}`,
                                    },
                                    trail: {
                                        stroke: `${items.trails}`,
                                    },
                                }}
                            >
                                <p className="text-black text-xs font-bold">{items.value}%</p>
                            </CircularProgressbarWithChildren>
                        </div>
                        <p className="font-semibold text-sm text-[#373750]">{items.title}</p>
                    </div>
                    <div className="flex flex-col md:w-[72%] justify-center gap-2 px-2">
                        <h2 className="text-lg md:text-xl font-medium text-[#373750]">{items.heading}</h2>
                        <p className="text-sm md:text-base text-gray-500">{items.paragraph}</p>

                    </div>
                </div>
            </div>
            {
                matches ?
                    // Mobile view: horizontal scroll
                    <div className="w-full md:bg-white rounded-lg py-3 mb-9 whitespace-nowrap overflow-auto touch-pan-x cursor-pointer  " >
                        <div className="w-full  flex flex-nowrap gap-[12px] justify-between ">
                            <div className="flex bg-white rounded-lg pl-2 pr-10 gap-1.5 md:gap-3 w-[400px] md:w-[32%] items-center">
                                <img src={items.img1} className="w-[40px]" />
                                <p className="font-semibold text-xs md:text-sm xl:text-base ">{items.para1}</p>
                            </div>
                            <div className="flex bg-white rounded-lg pl-2 pr-10 gap-1.5 md:gap-3 !w-[400px] md:w-[30%] items-center">
                                <img src={items.img2} className="w-[40px]" />
                                <p className="font-semibold text-xs md:text-sm xl:text-base ">{items.para2}</p>
                            </div>
                            <div className="flex bg-white rounded-lg pl-2 pr-12 gap-1.5 md:gap-3 !w-[400px] md:w-[30%] items-center">
                                <img src={items.img3} className="w-[40px]" />
                                <p className="font-semibold text-xs md:text-sm xl:text-base ">{items.para3}</p>
                            </div>
                        </div>
                    </div> :
                    // Desktop view
                    <div className="w-full md:bg-white rounded-lg py-3 mb-9 overflow-auto ">
                        <div className="w-full md:w-[95%] xl:w-10/12 mx-auto flex justify-between ">
                            <div className="flex gap-1.5 md:gap-3 w-[330px] md:w-[32%] items-center">
                                <img src={items.img1} className="w-[40px]" />
                                <p className="font-semibold text-xs md:text-sm xl:text-base ">{items.para1}</p>
                            </div>
                            <div className="flex gap-1.5 md:gap-3 w-[330px] md:w-[30%] items-center">
                                <img src={items.img2} className="w-[40px]" />
                                <p className="font-semibold text-xs md:text-sm xl:text-base ">{items.para2}</p>
                            </div>
                            <div className="flex gap-1.5 md:gap-3 w-[330px] md:w-[30%] items-center">
                                <img src={items.img3} className="w-[40px]" />
                                <p className="font-semibold text-xs md:text-sm xl:text-base ">{items.para3}</p>
                            </div>
                        </div>
                    </div>





            }

        </div>
    )
}

export default Explain