import styled from "styled-components"

export const HeaderWrapperStyled = styled.header`
  grid-template-columns: var(--grid);
  display: grid;
  background-color: var(--bg-primary);
`
export const HeaderContainerItemsStyled = styled.div`
  grid-column: 2/3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 13rem;
`
