import styled from "styled-components"

export const SectionsWrapper = styled.section`
  grid-template-columns: ${({ theme }) => theme.breakingPoints.desktop};
  display: grid;
  align-items: center;
  background-color: ${props =>
    props.backgroundColor
      ? ({ theme }) => theme.colors[props.backgroundColor]
      : ({ theme }) => theme.colors.gray};
  background-image: url(${props => props.backgroundImage});
  background-position: ${props =>
    props.backgroundPosition
      ? ({ theme }) => theme.colors[props.backgroundPosition]
      : "top left"};
  background-repeat: no-repeat;
  background-size: cover;
  height: ${props =>
    props.height ? ({ theme }) => theme.colors[props.height] : "80rem"};
`
