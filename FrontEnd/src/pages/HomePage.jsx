import React from 'react'
import HomeBanner from '../components/HomeBanner'
import StoryBanner from '../components/StoryBanner'
import CarsForSale from '../components/CarsForSale'
import DotExpandButton from '../components/DotExpandButton'

export default function HomePage() {
  return (
    <div>
      <HomeBanner/>
      <DotExpandButton/>
      <StoryBanner/>
      <CarsForSale/>
    </div>
  )
}
