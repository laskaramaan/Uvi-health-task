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
import Vitamin from "../assets/pic/Vitamin.svg"
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

    },{
        img:Avoidweb,
        value:"33",
        strokes:"rgba(143, 188, 143, 33)",
        trails:"rgba(143, 188, 143, 0.4)",
        title:"Mild",
        heading:"Gut Health",
        paragraph:"Irritable bowel, diarrhoea, food intolerance or constipation are the biggest signs of teaky gut, i.e. presence of microbes in the digestive tract. Gut health and thyroid are closely inter-connected as your gut houses the most immune cells in body.",
        img1:avoid,
        para1:"Avoid Dairy Products",
        img2:minus,
        para2:"Cut Processed/ high sugar foods",
        img3:alcohol,
        para3:"Eat nutrient dense foods"

    },{
        img:Stress,
        value:"90",
        strokes:"rgba(255, 0, 0, 90)",
        trails:"rgba(255, 0, 0, 0.4)",
        title:"Severe",
        heading:"Metabolic Stress",
        paragraph:"Irritable bowel, diarrhoea, food intolerance or constipation are the biggest signs of teaky gut, i.e. presence of microbes in the digestive tract. Gut health and thyroid are closely inter-connected as your gut houses the most immune cells in body.",
        img1:breathing,
        para1:"Practice deep breathing/ meditation",
        img2:yoga,
        para2:"Do yoga & strength exercises",
        img3:sleep,
        para3:"Sleep 7-8 hours to keep stress in check"

    },{
        img:Vitamin,
        value:"57",
        strokes:"rgba(255, 255, 0, 65)",
        trails:"rgba(255, 255, 0, 0.4)",
        title:"Moderate",
        heading:"Nutritional Deficiencies",
        paragraph:"common nutritional deficiencies of vitamin D, vitamin B12, vitamin A, vitamin B2 Vitamin C, Magnesium or Zinc can contribute to severity of hypothyroidism.",
        img1:check,
        para1:"Add supplements to your diets",
        img2:plus,
        para2:"Include magnesium rich food",
        img3:arrow,
        para3:"Improve dietary fibre intake"

    },{
        img:Environment,
        value:"58",
        strokes:"rgba(255, 255, 0, 65)",
        trails:"rgba(255, 255, 0, 0.4)",
        title:"Moderate",
        heading:"Genetics & Enviromnent",
        paragraph:"Genetic factors play a role in more than 75% of the thyroid cases. Moreover, exposure to toxic like mercury flouride and fertilizer have been found to affect thyroid function by recruiting antibodies to attack the thyroid.",
        img1:limit,
        para1:"Limit Toxin Exposure",
        img2:minus,
        para2:"Cut down plastic use",
        img3:sleep,
        para3:"Sleep 7-8 hours to keep stress in check"

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