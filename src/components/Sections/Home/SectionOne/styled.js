import styled from "styled-components"
import { SectionsWrapper } from "../../styled"

export const SectionOneWrapper = styled(SectionsWrapper)`
  .home-title {
    grid-column: 2/3;
    align-items: center;
    width: 70%;
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.font.weight.extrabold};
    font-size: ${({ theme }) => theme.font.size.extra};
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: -5px;
    line-height: 10rem;
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
