import styled from "styled-components"

export const HeaderWrapper = styled.header`
  grid-template-columns: ${({ theme }) => theme.breakingPoints.normal};
  display: grid;
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 0 5rem;

  @media screen and (max-width: 620px) {
    padding: 0 2rem;
  }
`
export const HeaderItems = styled.div`
  grid-column: 2/3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 12rem;

  @media screen and (max-width: 1024px) {
    height: 9rem;
  }
`
