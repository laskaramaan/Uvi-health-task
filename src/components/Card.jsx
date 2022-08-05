import React from 'react'
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


function Card({ items }) {
    return (
        <>
            <div className="flex md:flex-col md:items-center gap-4 w-full md:w-auto md:h-[230px] bg-white  rounded-xl ">
                {/* Conditions upper part */}
                <div
                    className=" h-[140px] w-[230px] md:w-[120px] xl:w-[160px] py-2 font-semibold p-2 bg-[#373750] text-white text-lg leading-5
                 flex flex-col items-center gap-2 rounded-xl"
                >
                    <img src={items.img} className="w-[70px]" />
                    <p className="text-center">{items.title}</p>
                </div>

                {/* Conditions lower part */}
                <div className="flex flex-col w-full items-center gap-1  justify-center">
                    <div className="w-[40px]">
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
                    {/* Condition messages */}
                    <p className="font-bold text-xs">{items.msg}</p>
                </div>
                

            </div>
        </>
    )
}

export default Card