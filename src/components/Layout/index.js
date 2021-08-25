import * as React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Footer from "./Footer"
import { StockMarket } from "../Base/StockMarket"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <StockMarket />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
