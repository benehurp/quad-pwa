import * as React from "react"

import Layout from "../components/Layout"
import HomeSection1 from "../components/Sections/Home/Section1"
import HomeSection2 from "../components/Sections/Home/Section2"
import HomeSection3 from "../components/Sections/Home/Section3"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HomeSection1 />
    <HomeSection2 />
    <HomeSection3 />
  </Layout>
)

export default IndexPage
