import React from 'react'
import Inflammation from "../assets/pic/Inflammation.svg";
import Stomach from "../assets/pic/stomach.svg";
import Metabolism from "../assets/pic/metabolism.svg";
import Medicine from "../assets/pic/medicine.svg";
import Genetics from "../assets/pic/genetics.svg";
import Card from './Card';

function Condition() {
    const arr = [{
        img: Inflammation,
        title: "Chronic Inflammation",
        strokes: "rgba(255, 255, 0, 65)",
        trails: "rgba(255, 255, 0, 0.4)",
        value: "65",
        msg: "Moderate"
    },
    {
        img: Stomach,
        title: "Gut Health",
        strokes: "rgba(143, 188, 143, 33)",
        trails: "rgba(143, 188, 143, 0.4)",
        value: "33",
        msg: "Mild"

    }, {
        img: Metabolism,
        title: "Metabolic Stress",
        strokes: "rgba(255, 0, 0, 90)",
        trails: "rgba(255, 0, 0, 0.4)",
        value: "90",
        msg: "Severe"
    },
    {
        img: Medicine,
        title: "Nutritional Deficiencies",
        strokes: "rgba(255, 255, 0, 57)",
        trails: "rgba(255, 255, 0, 0.4)",
        value: "57",
        msg: "Moderate"

    }, {
        img: Genetics,
        title: "Genetics & Environmnet",
        strokes: "rgba(255, 255, 0, 58)",
        trails: "rgba(255, 255, 0, 0.4)",
        value: "58",
        msg: "Moderate"
    }]
    return (
        <div className='w-full bg-[#fff5f5] py-8'>
            <div className='w-11/12 xl:w-9/12 mx-auto flex flex-col  gap-10'>
                <h2 className='text-xl md:text-2xl xl:text-4xl text-center font-semibold text-[#37503f]'>Your Thyroid Pre-Conditions at a Glance</h2>
                <div className='flex md:flex-row flex-col justify-between gap-3 md:gap-0 '>
                    {
                        arr.map((items, i) => (
                            <Card items={items} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Condition