import styled from "styled-components"
import { Link } from "gatsby"

export const ButtonRoundStyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.font.size.xxsmall};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  width: ${props => (props.width ? props.width : "9rem")};
  height: ${props => (props.height ? props.height : "2.5rem")};
  text-transform: uppercase;
  color: ${props =>
    props.color
      ? ({ theme }) => theme.colors[props.color]
      : ({ theme }) => theme.colors.white};
  background-image: linear-gradient(
    ${props => (props.gradientDeg ? props.gradientDeg : "94deg")},
    ${props =>
        props.gradientColorOne
          ? ({ theme }) => theme.colors[props.gradientColorOne]
          : ({ theme }) => theme.colors.redTwo}
      ${props => (props.gradientPercentOne ? props.gradientPercentOne : "15%")},
    ${props =>
        props.gradientColorTwo
          ? ({ theme }) => theme.colors[props.gradientColorTwo]
          : ({ theme }) => theme.colors.grayTwo}
      ${props => (props.gradientPercentTwo ? props.gradientPercentTwo : "125%")}
  );
  border-radius: ${props => (props.borderRadius ? props.borderRadius : "2rem")};
  letter-spacing: 0.7px;
  text-align: center;
  display: inline-flex;
  gap: 0 1rem;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    filter: drop-shadow(3px 5px 20px #141414) saturate(1.5);
  }
`
