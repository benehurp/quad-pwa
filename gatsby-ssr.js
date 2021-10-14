import React from "react"
import { ThemeProvider } from "styled-components"
import Theme from "./src/themes"
import GlobalStyles from "./src/styles"
import { UserStorage } from "./src/UserContext"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <UserStorage>
      <GlobalStyles />
      {element}
    </UserStorage>
  </ThemeProvider>
)
