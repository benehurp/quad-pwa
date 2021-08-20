import styled from "styled-components"

export const MenuWrapper = styled.nav`
  width: auto;
`

export const MenuItems = styled.ul`
  display: flex;
  font-size: 1.4rem;
  text-transform: uppercase;
  gap: 2.5rem;
`
export const Items = styled.li`
  padding: 0.5rem;
  color: var(--clear);
  font-weight: 600;
  &:hover {
    color: var(--primary-red);
    cursor: pointer;
    text-decoration: underline;
  }
`
