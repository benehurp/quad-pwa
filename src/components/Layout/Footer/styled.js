import styled from "styled-components"

export const FooterItemsWrapperStyled = styled.div`
  grid-template-columns: var(--grid);
  display: grid;
  background-color: var(--bg-primary);
`

export const FooterItemsStyled = styled.div`
  grid-column: 2/3;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0 5rem;
  height: 16rem;
`
