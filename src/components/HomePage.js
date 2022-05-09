import React from 'react'
import Layout from './shared/Layout'
import Hero from './hero/Hero'
import MainSection from './main-section/MainSection'
import FeaturedCollection from './featured-collection/FeaturedCollection'
import MainSectionBottom from './main-section/MainSectionBottom'


function HomePage({ user }) {

  console.log(user)

  return (
    <>
      <Layout>
        <Hero />
        <MainSection />
        <FeaturedCollection />
        <MainSectionBottom />
      </Layout>
    </>
  )
}

export default HomePage