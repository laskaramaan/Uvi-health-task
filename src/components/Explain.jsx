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

                </div>


            </div>

        </div>
    )
}

export default Explain