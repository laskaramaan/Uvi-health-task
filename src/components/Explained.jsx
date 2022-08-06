import React from 'react'

import Batterylow from '../assets/pic/Batterylow.svg'
import check from '../assets/pic/check.svg'
import cancel from '../assets/pic/x-circle.svg'
import food from '../assets/pic/food.svg'
import Avoidweb from '../assets/pic/Avoidweb.svg'
import avoid from '../assets/pic/avoid.svg'
import minus from '../assets/pic/minus.svg'
import alcohol from '../assets/pic/alcohol.svg'
import Stress from '../assets/pic/Stress.svg'
import yoga from '../assets/pic/yoga.svg'
import breathing from '../assets/pic/breathing.svg'
import sleep from '../assets/pic/sleep.svg'
import vimanin from '../assets/pic/Vitamin.svg'
import plus from '../assets/pic/plus.svg'
import arrow from '../assets/pic/arrow.svg'
import Environment from '../assets/pic/Environment.svg'
import limit from '../assets/pic/limit.svg'
import Explain from './Explain'

function Explained() {
    const arr=[{
        img:Batterylow,
        value:"66",
        strokes:"rgba(255, 255, 0, 65)",
        trails:"rgba(255, 255, 0, 0.4)",
        title:"Moderate",
        heading:"Inflammation",
        paragraph:"Auto-immune conditions or chronic infections can lead to Inflammation in the body. Your body releases anti-bodies that attack the thyroid cells, causing it to make less thyroid hormone leading to hypothyroidism.",
        img1:check,
        para1:"Add anti-inflammation foods",
        img2:cancel,
        para2:"Practice elimination diet under guidance",
        img3:food,
        para3:"Eat nutrient dense foods"

    }]
  return (
    <div className='py-5 w-full bg-[#fff5f5]'>
        <h2 className='text-xl md:text-3xl text-center font-bold py-10 text-[#373750]'>
            Your Thyroid Pre-Conditions explained 
        </h2>
        {
            arr.map((items)=>(
                <Explain items={items}/>
            ))
        }
        
    </div>
  )
}

export default Explained