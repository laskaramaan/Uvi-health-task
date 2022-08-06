import React from 'react'
import Thyroid from '../components/Thyroid'
import Condition from '../components/Condition'
import Footer from '../components/Footer'
import Explained from '../components/Explained'
import Need from '../components/Need'
import Factors from '../components/Factors'
function Home() {
  return (
    <>
      <Thyroid />
      <Condition />
      <Factors/>
      <Explained/>
      <Need/>
      <Footer />

    </>
  )
}

export default Home