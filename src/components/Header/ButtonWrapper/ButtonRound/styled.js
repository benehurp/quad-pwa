import styled from "styled-components"

export const ButtonRound = styled.button`
  font-size: 1rem;
  font-weight: 600;
  width: ${props => (props.width ? props.width : "9rem")};
  height: ${props => (props.height ? props.height : "2rem")};
  text-transform: uppercase;
  color: var(${props => (props.color ? props.color : "--clear")});
  background-image: linear-gradient(
    ${props => (props.gradientDeg ? props.gradientDeg : "94deg")},
    var(
        ${props =>
          props.gradientColorOne ? props.gradientColorOne : "--secundary-red"}
      )
      ${props => (props.gradientPercentOne ? props.gradientPercentOne : "15%")},
    var(
        ${props =>
          props.gradientColorTwo ? props.gradientColorTwo : "--bg-secundary"}
      )
      ${props => (props.gradientPercentTwo ? props.gradientPercentTwo : "125%")}
  );
  padding: 0.5rem;
  border-radius: 2rem;
  letter-spacing: 0.7px;
  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`
