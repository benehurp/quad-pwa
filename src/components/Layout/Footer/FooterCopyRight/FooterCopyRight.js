import React from "react"
import styled from "styled-components"

const FooterCopyRightWrapper = styled.div`
  grid-template-columns: var(--grid);
  display: grid;
  background-color: var(--bg-secundary);
`

const FooterCopyRightItem = styled.div`
  grid-column: 2/3;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-self: center;
`

const FooterCopyRight = () => {
  return (
    <FooterCopyRightWrapper>
      <FooterCopyRightItem>© 2021 QUAD Financial</FooterCopyRightItem>
    </FooterCopyRightWrapper>
  )
}

export default FooterCopyRight
