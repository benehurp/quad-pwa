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
  .container {
    grid-column: 2/3;
    margin: 8rem;

    @media screen and (max-width: 767px) {
      margin: 8rem 0rem;
    }
  }
  .left {
    width: 100%;
    position: relative;

    @media screen and (max-width: 1023px) {
      position: unset;
      display: flex;
      justify-content: center;
    }
  }
  .right {
    width: 100%;
    text-align: -webkit-right;

    @media screen and (max-width: 1023px) {
      text-align: -webkit-center;
    }
  }
  .big-logo {
    position: absolute;
    top: -25rem;
    left: -23rem;
    width: 60rem;
    height: auto;

    @media screen and (max-width: 1023px) {
      position: unset;
      width: 80%;
    }

    @media screen and (min-width: 1024px) and (max-width: 1279px) {
      width: 50rem;
      top: -23rem;
      left: -15rem;
    }
  }
  .big-logo-title {
    margin-bottom: 2rem;
    font-size: ${({ theme }) => theme.font.size.xlarge};
    line-height: 2.8rem;
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.font.weight.extrabold};
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
  @media screen and (max-width: 600px) {
    padding: 5rem 0;
  }

  @media screen and (max-width: 1023px) {
    flex-direction: column-reverse;
    gap: 5rem 0;
  }
`
