import styled from "styled-components"
import { Link } from "gatsby"

export const LogoWrapperStyled = styled.img`
  height: ${props => props.heigth};
  width: auto;
  display: block;

  @media screen and (max-width: 1024px) {
    height: calc(${props => props.heigth} * 0.8);
  }
`

export const LogoLink = styled(Link)`
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    filter: saturate(1.2);
  }
`
