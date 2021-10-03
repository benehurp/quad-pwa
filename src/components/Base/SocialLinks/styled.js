import styled from "styled-components"

export const SocialMediaWrapper = styled.nav`
  width: 100%;
`

export const SocialMediaList = styled.ul`
  display: flex;
  gap: 0 0.8rem;
  justify-content: start;
  align-items: center;
`

export const SocialMediaItem = styled.li`
  width: 2rem;
  cursor: pointer;
`

export const SocialMediaLink = styled.a`
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    filter: opacity(50%);
  }
`
