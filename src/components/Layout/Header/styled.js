import styled from "styled-components"

export const HeaderWrapperStyled = styled.header`
  grid-template-columns: ${({ theme }) => theme.breakingPoints.desktop};
  display: grid;
  background-color: ${({ theme }) => theme.colors.gray};
`
export const HeaderContainerItemsStyled = styled.div`
  grid-column: 2/3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 13rem;
`
