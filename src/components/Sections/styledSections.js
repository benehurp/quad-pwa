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
export const SectionsH1 = styled.h1`
  width: ${props => (props.fontWeigth ? props.textAlign : "100%")};
  text-align: ${props => (props.fontWeigth ? props.textAlign : "left")};
  text-transform: uppercase;
  font-size: ${props =>
    props.fontSize
      ? ({ theme }) => theme.font.size[props.fontSize]
      : ({ theme }) => theme.font.size.xxextra};
  font-weight: ${props =>
    props.fontWeigth
      ? ({ theme }) => theme.font.weight[props.fontWeigth]
      : ({ theme }) => theme.font.weight.extrabold};
  line-height: ${props => (props.lineHeight ? props.lineHeight : "10rem")};
  letter-spacing: ${props =>
    props.letterSpacing ? props.letterSpacing : "-5px"};
  & > span {
    color: ${({ theme }) => theme.colors.red};
  }
  & + p {
    margin-top: 2rem;
  }
`

export const SectionsH2 = styled.h2`
  width: ${props => (props.fontWeigth ? props.textAlign : "100%")};
  text-align: ${props => (props.fontWeigth ? props.textAlign : "left")};
  text-transform: uppercase;
  font-size: ${props =>
    props.fontSize
      ? ({ theme }) => theme.font.size[props.fontSize]
      : ({ theme }) => theme.font.size.xextra};
  font-weight: ${props =>
    props.fontWeigth
      ? ({ theme }) => theme.font.weight[props.fontWeigth]
      : ({ theme }) => theme.font.weight.extrabold};
  line-height: ${props => (props.lineHeight ? props.lineHeight : "6rem")};
  letter-spacing: ${props =>
    props.letterSpacing ? props.letterSpacing : "-2px"};
  & > span {
    color: ${({ theme }) => theme.colors.red};
  }
  & + p {
    margin-top: 2rem;
  }
`

export const SectionsH3 = styled.h3`
  width: ${props => (props.fontWeigth ? props.textAlign : "100%")};
  text-align: ${props => (props.fontWeigth ? props.textAlign : "left")};
  text-transform: uppercase;
  font-size: ${props =>
    props.fontSize
      ? ({ theme }) => theme.font.size[props.fontSize]
      : ({ theme }) => theme.font.size.extra};
  font-weight: ${props =>
    props.fontWeigth
      ? ({ theme }) => theme.font.weight[props.fontWeigth]
      : ({ theme }) => theme.font.weight.extrabold};
  line-height: ${props => (props.lineHeight ? props.lineHeight : "6rem")};
  letter-spacing: ${props =>
    props.letterSpacing ? props.letterSpacing : "-2px"};
  & > span {
    color: ${({ theme }) => theme.colors.red};
  }
  & + p {
    margin-top: 2rem;
  }
`

export const SectionsH4 = styled.h4`
  width: ${props => (props.fontWeigth ? props.textAlign : "100%")};
  text-align: ${props => (props.fontWeigth ? props.textAlign : "left")};
  text-transform: uppercase;
  font-size: ${props =>
    props.fontSize
      ? ({ theme }) => theme.font.size[props.fontSize]
      : ({ theme }) => theme.font.size.xxlarge};
  font-weight: ${props =>
    props.fontWeigth
      ? ({ theme }) => theme.font.weight[props.fontWeigth]
      : ({ theme }) => theme.font.weight.extrabold};
  line-height: ${props => (props.lineHeight ? props.lineHeight : "3.2rem")};
  letter-spacing: ${props =>
    props.letterSpacing ? props.letterSpacing : "-2px"};
  & > span {
    color: ${({ theme }) => theme.colors.red};
  }
  & + p {
    margin-top: 2rem;
  }
`

export const SectionsH5 = styled.h5``

export const SectionsH6 = styled.h6``
