import styled from "styled-components"

export const MenuWrapper = styled.nav`
  width: auto;
`

export const MenuItems = styled.ul`
  display: flex;
  font-size: ${({ theme }) => theme.font.size.xsmall};
  text-transform: uppercase;
  gap: 2rem;
`
export const Items = styled.li`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  &:hover {
    color: ${({ theme }) => theme.colors.red};
    cursor: pointer;
    text-decoration: underline;
  }
`
