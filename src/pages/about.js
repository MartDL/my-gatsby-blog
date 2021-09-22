import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
    <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    <StaticImage
        alt="beach"
        src="../images/beach.jpg"
      />
  </Layout>
  )
}

export default AboutPage