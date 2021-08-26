import styled from "styled-components"
import { Link } from "gatsby"

export const LogoWrapperStyled = styled.img`
  height: ${props => props.heigth};
`

export const LogoLink = styled(Link)`
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    filter: saturate(1.2);
  }
`
