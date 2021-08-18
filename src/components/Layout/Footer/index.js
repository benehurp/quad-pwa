import React from "react"
import styled from "styled-components"
import Logo from "../Logo"
import FooterCopyRight from "./FooterCopyRight/FooterCopyRight"

const FooterItemsWrapper = styled.div`
  grid-template-columns: var(--grid);
  display: grid;
  background-color: var(--bg-primary);
`

const FooterItems = styled.div`
  grid-column: 2/3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 16rem;
`

const Footer = () => {
  return (
    <footer>
      <FooterItemsWrapper>
        <FooterItems>
          <Logo />
        </FooterItems>
      </FooterItemsWrapper>
      <FooterCopyRight />
    </footer>
  )
}

export default Footer
