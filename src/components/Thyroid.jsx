import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../index.css";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import healthCoach from "../assets/pic/health.svg";
import persons from "../assets/pic/persons.svg";
import height from "../assets/pic/height.svg";
import weight from "../assets/pic/weight.svg";
import weighting from "../assets/pic/weighting.svg";
import dull from "../assets/pic/dull.svg";
import skin from "../assets/pic/skin.svg";
import cold from "../assets/pic/cold.svg";
import { useMediaQuery } from "@mui/material";

function Thyroid() {
    const matches = useMediaQuery('(max-width:600px)');
  return (
    <div className="w-full bg-[#fff5f5] pt-[120px] pb-7">
      <div className=" w-11/12 xl:w-9/12 mx-auto flex flex-col md:flex-row gap-2 xl:gap-4 text-[#373750]">
        {/* Left side thyroid panel */}
        <div className="w-full p-3 md:w-[240px] bg-[#373750] flex items-center justify-center text-center flex-col gap-4 md:px-2 md:py-4 xl:px-3 xl:py-5 rounded-lg">
          <h2 className="text-xl md:text-2xl text-white ">Your Thyroid Severity is</h2>
          <div className="flex md:flex-col items-center gap-3">
          <div className="w-[120px]">
            <CircularProgressbarWithChildren
              value={70}
              styles={{
                path: {
                  stroke: `rgba(255, 255, 255, 70)`,
                },
                trail: {
                  stroke: "rgb(80,80,166,0.2)",
                },
              }}
            >
              <p className="text-white text-xl md:text-4xl font-bold">70%</p>
            </CircularProgressbarWithChildren>

            </div>
            <div className="rounded-lg flex gap-1 bg-white w-11/12 mx-auto p-2 text-start items-center text-sm">
                <ErrorOutlineIcon className="text-yellow-400"/>
                <p>Your Thyroid Health needs attention</p>
          </div>
          </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default Thyroid