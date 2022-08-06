import React from 'react'

import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useMediaQuery from '@mui/material/useMediaQuery';

function Explain({ items }) {

    const matches = useMediaQuery('(max-width:600px)');
    return (
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

        </div>
    )
}

export default Explain