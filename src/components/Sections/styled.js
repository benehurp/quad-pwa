import styled from "styled-components"

export const SectionWrapper = styled.section`
  grid-template-columns: ${({ theme }) => theme.breakingPoints.desktop};
  display: grid;
  align-items: center;
  background-color: ${props =>
    props.background
      ? ({ theme }) => theme.colors[props.background]
      : ({ theme }) => theme.colors.gray};
  /* background-image: url("./img/section1.jpg"); */
  background-position: ${props =>
    props.backgroundPosition
      ? ({ theme }) => theme.colors[props.backgroundPosition]
      : "top left"};
  background-repeat: no-repeat;
  background-size: cover;
  height: ${props =>
    props.height ? ({ theme }) => theme.colors[props.height] : "80rem"};
`
