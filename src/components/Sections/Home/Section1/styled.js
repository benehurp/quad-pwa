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
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 2/3;
    width: 75%;
  }
  .move-down-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 88rem;
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
      top: -1rem;
      opacity: 1;
    }
    100% {
      top: 8rem;
      opacity: 0;
    }
  }
`
export const TitleH1 = styled(SectionsH1)``

export const TitleH2 = styled(SectionsH2)``

export const TitleH3 = styled(SectionsH3)``

export const TitleH4 = styled(SectionsH4)``

export const TitleH5 = styled(SectionsH5)``

export const TitleH6 = styled(SectionsH6)``