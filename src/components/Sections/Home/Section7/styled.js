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
    width: 100%;
  }
  ul {
    gap: 2rem;
    display: flex;
    margin-top: 0rem;
    align-items: flex-start;
    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  }
  .person {
    position: absolute;
    transform: translateY(-95%);
    display: flex;
    justify-content: center;

    & img {
      max-width: 100%;
      display: block;
      &:nth-child(2) {
        max-width: 10%;
      }

      @media screen and (max-width: 600px) {
        max-width: 80%;
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
  --lineHeigth: 30%;
  padding: 20rem 3rem 8rem;
  word-break: break-word;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: calc(var(--lineHeigth) + 5%);

  &:nth-child(2) {
    margin-top: var(--lineHeigth);
  }

  @media screen and (min-width: 768px) and (max-width: 850px) {
    margin-top: calc(var(--lineHeigth) - 5%);

    &:nth-child(2) {
      margin-top: calc(var(--lineHeigth) - 10%);
    }
  }

  @media screen and (min-width: 470px) and (max-width: 768px) {
    margin-top: calc(var(--lineHeigth) + 5%);

    &:nth-child(2) {
      margin-top: calc(var(--lineHeigth) + 5%);
    }
  }

  @media screen and (max-width: 470px) {
    margin-top: calc(var(--lineHeigth) + 20%);

    &:nth-child(2) {
      margin-top: calc(var(--lineHeigth) + 20%);
    }
  }
`
