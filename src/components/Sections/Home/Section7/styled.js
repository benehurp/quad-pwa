import styled from "styled-components"
import {
  SectionsWrapper,
  CardGradientBase,
  SectionsH1,
  SectionsH2,
  SectionsH3,
  SectionsH4,
  SectionsH5,
  SectionsH6,
  SectionsP,
} from "../../styledSections"

export const SectionWrapper = styled(SectionsWrapper)`
  grid-column: 2/3;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    width: 70%;
  }
  ul {
    margin-top: 4rem;
    gap: 2rem;
    display: flex;
    margin-top: 22rem;
    align-items: center;
  }
  .person {
    position: absolute;
    top: -22rem;
    padding: 3rem;

    & img {
      max-width: 100%;
      display: block;
      &:nth-child(2) {
        max-width: 10%;
      }
    }
  }
  .stamp {
    margin-top: 3rem;
    & img {
      width: 80%;
      opacity: 0.3;
      &:hover {
        opacity: 0.8;
      }
    }
  }
`

export const TitleH1 = styled(SectionsH1)``

export const TitleH2 = styled(SectionsH2)``

export const TitleH3 = styled(SectionsH3)``

export const TitleH4 = styled(SectionsH4)``

export const TitleH5 = styled(SectionsH5)``

export const TitleH6 = styled(SectionsH6)``

export const Paragraph = styled(SectionsP)``

export const Card = styled(CardGradientBase)`
  padding: 15rem 3rem 3rem;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 70rem;
  top: 0;
  &:nth-child(2) {
    height: 78rem;
    & .person {
      width: 85%;
      top: -23rem;
    }
  }
`
