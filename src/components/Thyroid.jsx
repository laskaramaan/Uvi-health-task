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
              <ErrorOutlineIcon className="text-yellow-400" />
              <p>Your Thyroid Health needs attention</p>
            </div>
          </div>
        </div>

        <div className="md:w-10/12 bg-white rounded-lg xl:w-9/12 px-2 xl:px-10 py-4 flex flex-col gap-2">
          {/* Right thyroid panel upper part */}
          {
            matches ?
              // mobile view
              <div className="flex flex-col gap-3 ">

                <p className="font-bold text-center">Mehak Malik</p>
                <div className="flex text-sm justify-center ">
                  <h2 className="font-semibold ">Dignosed:</h2>
                  <p className="font-medium ">3 years ago</p>
                </div>
                <div className=" flex justify-between items-center px-2 py-1 rounded-xl bg-gray-200">
                  <div className="flex text-sm gap-2 items-center ">
                    <img src={persons} alt="" />
                    <div>
                      <h2>Age</h2>
                      <p className="font-bold text-[#f59382]">29 Years</p>
                    </div>
                  </div>
                  <div className=" border-l-2 h-6 border-gray-400"></div>
                  <div className="flex text-sm gap-2 items-center ">
                    <img src={height} alt="" />
                    <div>
                      <h2>Height</h2>
                      <p className="font-bold text-[#f59382]">169 cms</p>
                    </div>
                  </div>

                </div>
                <div className=" flex justify-between items-center px-2 py-1 rounded-xl w-1/2 bg-gray-200">
                  <div className="flex text-sm gap-2 items-center ">
                    <img src={weight} alt="" />
                    <div>
                      <h2>Weight</h2>
                      <p className="font-bold text-[#f59382]">50 Kg</p>
                    </div>
                  </div>
                </div>
              </div> :
              // Desktop view
              <>
                <div className="flex justify-between pb-6 ">
                  <div className="flex text-sm flex-col">
                    <h2 className="text-[#f59382]">Name</h2>
                    <p className="font-bold">Mehak Malik</p>
                  </div>
                  <div className="flex text-sm flex-col">
                    <h2 className="font-medium ">Dignosed</h2>
                    <p className="font-medium ">3 years ago</p>
                  </div>
                  <img src={healthCoach} className="md:w-[150px] md:h-[60px] xl:w-[200px] xl:h-[40px]" alt="" />
                </div>
                <div className="flex justify-between items-center pb-7 ">
                  <div className="flex text-sm gap-1 items-center ">
                    <img src={persons} alt="" />
                    <div>
                      <h2 className="text-[#f59382]">Age</h2>
                      <p className="font-bold">29 Years</p>
                    </div>
                  </div>
                  <div className=" border-l-2 h-6"></div>
                  <div className="flex text-sm gap-1 items-center ">
                    <img src={height} alt="" />
                    <div>
                      <h2 className="text-[#f59382]">Height</h2>
                      <p className="font-bold">169 cms</p>
                    </div>
                  </div>
                  <div className=" border-l-2 h-6"></div>
                  <div className="flex text-sm gap-1 items-center ">
                    <img src={weight} alt="" />
                    <div>
                      <h2 className="text-[#f59382]">Weight</h2>
                      <p className="font-bold">50 Kg</p>
                    </div>
                  </div>
                </div>
              </>
          }

          {/* Rigjt thyroid panel lower part*/}
          <div className="flex flex-col md:items-center gap-3">
            <h2 className="font-bold">Symptoms :</h2>
            <div className="flex gap-12">
              <div className="flex flex-col gap-1">
                <img src={weighting} className="h-[40px]" alt="" />
                <p className="text-xs">Weight Gain</p>
              </div>
              <div className="flex flex-col gap-1">
                <img src={dull} className="h-[40px]" alt="" />
                <p className="text-xs">Fatigue</p>
              </div>
              <div className="flex flex-col gap-1">
                <img src={skin} className="h-[40px]" alt="" />
                <p className="text-xs">Dry Skin</p>
              </div>
              <div className="flex flex-col gap-1">
                <img src={cold} className="h-[40px]" alt="" />
                <p className="text-xs">Sensitive to Cold</p>
              </div>
            </div>
            {
              matches &&
              <img src={healthCoach} className="w-[200px] h-[60px] text-center mx-auto" alt="" />
            }
          </div>
        </div>


      </div>
    </div>
  )
}

export default Thyroid