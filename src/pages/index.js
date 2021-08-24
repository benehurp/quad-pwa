import * as React from "react"

import Layout from "../components/Layout"
import HomeSectionOne from "../components/Sections/Home/SectionOne"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HomeSectionOne />
  </Layout>
)

export default IndexPage
