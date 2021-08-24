import styled, { css } from "styled-components"

export const ButtonRoundStyled = styled.button`
  font-size: 1rem;
  font-weight: 600;
  width: ${props => (props.width ? props.width : "9rem")};
  height: ${props => (props.height ? props.height : "2.5rem")};
  text-transform: uppercase;
  ${({ theme }) =>
    theme.colors &&
    css`
      color: ${props =>
        props.color ? theme.colors[props.color] : theme.colors.white};

      background-image: linear-gradient(
        ${props => (props.gradientDeg ? props.gradientDeg : "94deg")},
        ${props =>
            props.gradientColorOne
              ? theme.colors[props.gradientColorOne]
              : theme.colors.redTwo}
          ${props =>
            props.gradientPercentOne ? props.gradientPercentOne : "15%"},
        ${props =>
            props.gradientColorTwo
              ? theme.colors[props.gradientColorTwo]
              : theme.colors.grayTwo}
          ${props =>
            props.gradientPercentTwo ? props.gradientPercentTwo : "125%"}
      );
    `}
  padding: 0.5rem;
  border-radius: ${props => (props.borderRadius ? props.borderRadius : "2rem")};
  letter-spacing: 0.7px;
  text-align: center;
  display: inline-flex;
  gap: 0 1rem;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`
