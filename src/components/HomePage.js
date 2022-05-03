import React from 'react'
import Layout from './shared/Layout'
import Hero from './hero/Hero'
import MainSection from './main-section/MainSection'
import FeaturedCollection from './featured-collection/FeaturedCollection'

function HomePage() {
  return (
    <>
      <Layout>
        <Hero />
        <MainSection />
        <FeaturedCollection />
      </Layout>
    </>
  )
}

export default HomePage