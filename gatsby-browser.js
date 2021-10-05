import React from "react"
import { ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"
import GlobalStyles from "./src/themes/global"
import { UserStorage } from "./src/UserContext"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <UserStorage>
      <GlobalStyles />
      {element}
    </UserStorage>
  </ThemeProvider>
)
