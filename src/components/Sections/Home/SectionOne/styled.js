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

export const SectionOneWrapper = styled(SectionsWrapper)`
  .section-container {
    grid-column: 2/3;
  }
  .title-text-highlight {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.red};
  }
  .move-down-container {
    position: absolute;
    top: 92rem;
    grid-column: 2/3;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .move-down-icon {
    position: relative;
    width: 8rem;
    top: -1rem;
    animation-name: moveDown;
    animation-iteration-count: infinite;
    animation-duration: 1s;
  }
  @keyframes moveDown {
    0% {
      top: -1rem;
      opacity: 1;
    }
    100% {
      top: 2rem;
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
