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
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .quotes {
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 108%;
    top: 12rem;
  }
  .avatar-container {
    position: relative;
    left: 0;
    top: -5.5rem;
    transform: translateY(-4.5rem) translateX(-4.5rem);
  }
  .avatar {
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    position: absolute;
  }
  & .left {
    width: 8rem;
    transform: rotateY(180deg);
  }
  & .right {
    width: 8rem;
  }
  ul {
    margin-top: 9rem;
    display: flex;
    gap: 3rem;
    z-index: 1;
  }
  .btn-right {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .testimonial {
    height: 15rem;
    overflow: hidden;
    margin-top: 2rem;
    margin-bottom: 2rem;
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
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  padding: 5rem 3rem 2rem;
`
