import * as React from "react"

import Layout from "../components/Layout"
import HomeSectionOne from "../components/Sections/Home/SectionOne"
import HomeSectionTwo from "../components/Sections/Home/SectionTwo"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HomeSectionOne />
    <HomeSectionTwo />
  </Layout>
)

export default IndexPage
