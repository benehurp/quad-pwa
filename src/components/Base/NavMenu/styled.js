import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const MenuWrapper = styled.nav`
  width: auto;
`

export const MenuListItems = styled.ul`
  display: flex;
  font-size: ${({ theme }) => theme.font.size.xsmall};
  text-transform: uppercase;
  gap: 2rem;

  a {
    text-decoration: none;
  }
`

export const MenuItem = styled.li`
  display: block;
`

export const MenuLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  &:hover {
    color: ${({ theme }) => theme.colors.red};
    cursor: pointer;
    text-decoration: underline;
  }

  ${props =>
    props.disable === "true" &&
    css`
      opacity: 0.2;
      &:hover {
        color: ${({ theme }) => theme.colors.white};
        cursor: pointer;
        text-decoration: none;
      }
    `}
`
