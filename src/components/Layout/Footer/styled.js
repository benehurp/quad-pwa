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
  justify-content: start;
  gap: 0 5rem;
  height: 16rem;
`

export const SocialLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const SocialLinksDescription = styled.div`
  width: 100%;
`
