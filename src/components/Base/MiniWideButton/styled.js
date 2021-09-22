import styled from "styled-components"
import { Link } from "gatsby"

export const ButtonRoundStyledLink = styled(Link)`
  font-size: ${props =>
    props.$fontSize
      ? ({ theme }) => theme.font.size[props.$fontSize]
      : ({ theme }) => theme.font.size.xxxsmall};
  font-weight: ${props =>
    props.$fontWeigth
      ? ({ theme }) => theme.font.weight[props.$fontWeigth]
      : ({ theme }) => theme.font.weight.semibold};
  width: ${props => (props.$width ? props.$width : "9rem")};
  height: ${props => (props.$height ? props.$height : "3rem")};
  text-transform: uppercase;
  color: ${props =>
    props.$color
      ? ({ theme }) => theme.colors[props.$color]
      : ({ theme }) => theme.colors.white};
  background-image: linear-gradient(
    ${props => (props.$gradientDeg ? props.$gradientDeg : "94deg")},
    ${props =>
        props.$gradientColor1
          ? ({ theme }) => theme.colors[props.$gradientColor1]
          : ({ theme }) => theme.colors.red2}
      ${props => (props.$gradientPercent1 ? props.$gradientPercent1 : "15%")},
    ${props =>
        props.$gradientColor2
          ? ({ theme }) => theme.colors[props.$gradientColor2]
          : ({ theme }) => theme.colors.gray2}
      ${props => (props.$gradientPercent2 ? props.$gradientPercent2 : "125%")}
  );
  border-radius: ${props =>
    props.$borderRadius ? props.$borderRadius : "2rem"};
  margin-top: ${props => (props.$marginTop ? props.$marginTop : "none")};
  box-sizing: border-box;
  padding-top: ${props => (props.$padding ? props.$padding : "0.3rem")};
  padding-bottom: ${props => (props.$padding ? props.$padding : "0.3rem")};
  padding-left: 2.5rem;
  padding-right: 2.5rem;
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
