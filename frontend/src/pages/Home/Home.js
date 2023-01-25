import React from 'react'
import Flowers from './Flowers'
import HeroSec from './HeroSec'
import SecondSec from './SecondSec'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
      </Helmet>
      <HeroSec />
      <SecondSec />
      <Flowers />
    </div>
  )
}

export default Home
