import * as React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Footer from "./Footer"
import { UserContext } from "../../UserContext"

const Layout = ({ children }) => {
  const { openMenu } = React.useContext(UserContext)

  if (!openMenu) {
    return (
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    )
  } else {
    return (
      <>
        <Header />
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
