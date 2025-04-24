import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular.jsx'
import ElegantProduct from '../Components/ElegantProduct/ElegantProduct.jsx'
import NewCollection from '../Components/NewCollection/NewCollection.jsx'
import NewLetter from '../Components/NewLetter/NewLetter.jsx'
import Policy from '../Components/Policy/Policy.jsx'
import Footer from '../Components/Footer/Footer.jsx'
export const Home = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <ElegantProduct />
      <NewCollection/>
      <Policy />
      <NewLetter />
    </div>
  )
}

export default Home
