import styled from "styled-components"
import {
  SectionsWrapper,
  SectionsH1,
  SectionsH2,
  SectionsH3,
  SectionsH4,
  SectionsH5,
  SectionsH6,
} from "../../styledSections"

export const SectionWrapper = styled(SectionsWrapper)`
  position: relative;

  .container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    grid-column: 2/3;
    padding: 10rem 0;
  }
  .move-down-container {
    position: absolute;
    bottom: 20rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

  .button-wrapper {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateY(50%) translateX(-50%);
  }

  .move-down-icon {
    position: relative;
    width: 6rem;
    animation-name: moveDown;
    animation-iteration-count: infinite;
    animation-duration: 1.2s;
  }
  @keyframes moveDown {
    0% {
      top: 0rem;
      opacity: 1;
    }
    100% {
      top: 18rem;
      opacity: 0;
    }
  }
`
export const TitleH1 = styled(SectionsH1)`
  @media screen and (max-width: 1024px) {
    font-size: 13vw;
    line-height: 12vw;
  }
`

export const TitleH2 = styled(SectionsH2)``

export const TitleH3 = styled(SectionsH3)``

export const TitleH4 = styled(SectionsH4)``

export const TitleH5 = styled(SectionsH5)``

export const TitleH6 = styled(SectionsH6)``
