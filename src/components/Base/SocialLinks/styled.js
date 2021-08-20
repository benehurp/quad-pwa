import styled from "styled-components"

export const SocialLinksWrapper = styled.nav`
  width: 100%;
`

export const SocialLinksList = styled.ul`
  display: flex;
  gap: 0 0.8rem;
  justify-content: start;
  align-items: center;
`

export const SocialLinksItem = styled.li`
  width: 2rem;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
`
