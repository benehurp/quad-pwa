import styled from "styled-components"

export const FooterItemsWrapper = styled.div`
  grid-template-columns: var(--grid);
  display: grid;
  background-color: var(--bg-primary);
`

export const FooterItems = styled.div`
  grid-column: 2/3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 16rem;
`
