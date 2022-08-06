import React from 'react'
import Thyroid from '../components/Thyroid'
import Condition from '../components/Condition'
import Footer from '../components/Footer'
import Explained from '../components/Explained'
import Need from '../components/Need'
function Home() {
  return (
    <>
      <Thyroid />
      <Condition />
      <Explained/>
      <Need/>
      <Footer />

    </>
  )
}

export default Home