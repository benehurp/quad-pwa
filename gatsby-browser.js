import React from "react"
import { ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"
import GlobalStyles from "./src/themes/global"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
