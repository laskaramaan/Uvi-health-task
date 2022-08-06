import React from 'react'
import Thyroid from '../components/Thyroid'
import Condition from '../components/Condition'
import Footer from '../components/Footer'
import Explained from '../components/Explained'

function Home() {
  return (
    <>
      <Thyroid />
      <Condition />
      <Explained/>
      <Footer />

    </>
  )
}

export default Home