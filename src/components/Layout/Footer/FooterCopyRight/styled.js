import styled from "styled-components"

export const FooterCopyRightWrapperStyled = styled.div`
  grid-template-columns: ${({ theme }) => theme.breakingPoints.desktop};
  display: grid;
  background-color: ${({ theme }) => theme.colors.grayTwo};
`

export const FooterCopyRightItemStyled = styled.div`
  grid-column: 2/3;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-self: center;
`
