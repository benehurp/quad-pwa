import styled from "styled-components"

export const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: ${({ theme }) => theme.breakingPoints.normal};
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 0 5rem;

  @media screen and (max-width: 376px) {
    padding: 0 2rem;
  }
`

export const FooterItems = styled.div`
  grid-column: 2/3;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`
export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem 0;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  grid-column: 1/2;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 768px) {
    grid-column: 2/3;
    align-items: center;
    padding-top: 5rem;
  }
`

export const FooterCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0 5rem;
  height: 16rem;
  grid-column: 2/3;

  @media screen and (max-width: 768px) {
    height: auto;
    padding-top: 2rem;
  }
`

export const SocialLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const SocialLinksDescription = styled.div`
  width: 100%;
`

export const AddressItem = styled.address`
  display: flex;
  justify-content: center;
  gap: 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 5rem;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 5rem;
  }
`
