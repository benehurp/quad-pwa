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
  width: ${props => (props.width ? props.width : "100%")};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  font-size: ${({ theme }) => theme.font.size.xxextra};
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
  text-transform: uppercase;
  line-height: 10rem;
  letter-spacing: -5px;
  & > span {
    color: ${({ theme }) => theme.colors.red};
  }
  & + p {
    margin-top: 2rem;
  }
  & + p {
    margin-bottom: 2rem;
  }
`

export const SectionsH2 = styled.h2`
  width: ${props => (props.width ? props.width : "100%")};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  font-size: ${({ theme }) => theme.font.size.xextra};
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
  text-transform: uppercase;
  line-height: 9rem;
  letter-spacing: -3px;
  & > span {
    color: ${({ theme }) => theme.colors.red};
  }
  & + p {
    margin-top: 2rem;
  }
  & + p {
    margin-bottom: 2rem;
  }
`

export const SectionsH3 = styled.h3`
  width: ${props => (props.width ? props.width : "100%")};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  font-size: ${({ theme }) => theme.font.size.xxextra};
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
  text-transform: uppercase;
  line-height: 10rem;
  letter-spacing: -5px;
  & > span {
    color: ${({ theme }) => theme.colors.red};
  }
  & + p {
    margin-top: 2rem;
  }
  & + p {
    margin-bottom: 2rem;
  }
`

export const SectionsH4 = styled.h4`
  width: ${props => (props.width ? props.width : "100%")};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  font-size: ${({ theme }) => theme.font.size.xxlarge};
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
  text-transform: uppercase;
  line-height: 3.2rem;
  letter-spacing: -2px;
  & > span {
    color: ${({ theme }) => theme.colors.red};
  }
  & + p {
    margin-top: 2rem;
  }
  & + p {
    margin-bottom: 2rem;
  }
`

export const SectionsH5 = styled.h5``

export const SectionsH6 = styled.h6``

export const SectionsP = styled.p`
  width: ${props => (props.width ? props.width : "100%")};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
`
