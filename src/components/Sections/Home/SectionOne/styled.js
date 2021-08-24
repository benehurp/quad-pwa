import styled from "styled-components"

export const SectionOneWrapper = styled.section`
  grid-template-columns: ${({ theme }) => theme.breakingPoints.desktop};
  display: grid;
  align-items: center;
  background-image: url("./img/section1.jpg");
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
  height: 80rem;

  .hs1-title {
    grid-column: 2/3;
    align-items: center;
    width: 70%;
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    font-size: 12rem;
    letter-spacing: -5px;
    line-height: 10rem;
    font-weight: 800;
  }
  .hs1-move-down-container {
    padding: 1rem;
    position: absolute;
    top: 92rem;
    grid-column: 2/3;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hs1-move-down {
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
