import styled, { css } from "styled-components"

export const SectionsWrapper = styled.section`
  hr {
    width: 80%;
    margin: 1.5rem 0;
    background: ${({ theme }) => theme.colors.red};
    height: 1px;
    border: 0px;
  }

  grid-template-columns: ${({ theme }) => theme.breakingPoints.normal};
  display: grid;
  align-items: center;
  ${props =>
    props.backgroundType === "color" &&
    css`
      background-color: ${props =>
        props.backgroundColor
          ? ({ theme }) => theme.colors[props.backgroundColor]
          : ({ theme }) => theme.colors.gray};
    `}

  ${props =>
    props.backgroundType === "gradient" &&
    css`
      background-image: linear-gradient(
        ${props => (props.gradientDeg ? props.gradientDeg : "94deg")},
        ${props =>
            props.gradientColor1
              ? ({ theme }) => theme.colors[props.gradientColor1]
              : ({ theme }) => theme.colors.red2}
          ${props => (props.gradientPercent1 ? props.gradientPercent1 : "15%")},
        ${props =>
            props.gradientColor2
              ? ({ theme }) => theme.colors[props.gradientColor2]
              : ({ theme }) => theme.colors.gray2}
          ${props => (props.gradientPercent2 ? props.gradientPercent2 : "125%")}
      );
    `}

  ${props =>
    props.backgroundType === "image" &&
    css`
      background-image: url(${props => props.backgroundImage});
      background-position: ${props =>
        props.backgroundPosition ? props.backgroundPosition : "top left"};
      background-repeat: no-repeat;
      background-size: cover;
    `}
  height: ${props => (props.height ? props.height : "auto")};
  min-height: 100vh;
  padding: 5rem 5rem;

  @media screen and (max-width: 599px) {
    padding: 5rem 2rem;
  }
`

export const CardGradientBase = styled.div`
  width: ${props => (props.width ? props.width : "100%")};
  height: auto;
  display: flex;
  padding: 5rem;
  align-items: center;
  background-image: linear-gradient(
    ${props => (props.gradientDeg ? props.gradientDeg : "221deg")},
    ${props =>
        props.gradientColor1
          ? ({ theme }) => theme.colors[props.gradientColor1]
          : ({ theme }) => theme.colors.gray4}
      ${props => (props.gradientPercent1 ? props.gradientPercent1 : "0%")},
    ${props =>
        props.gradientColor2
          ? ({ theme }) => theme.colors[props.gradientColor2]
          : ({ theme }) => theme.colors.gray3}
      ${props => (props.gradientPercent2 ? props.gradientPercent2 : "90%")}
  );
  border-radius: ${props => (props.borderRadius ? props.borderRadius : "2rem")};
  box-sizing: border-box;
  &:hover {
    filter: drop-shadow(3px 5px 20px #141414);
  }
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

  @media screen and (max-width: 520px) {
    font-size: calc(${({ theme }) => theme.font.size.xxextra} * 0.4);
    line-height: 4rem;
  }

  @media screen and (min-width: 520px) and (max-width: 690px) {
    font-size: calc(${({ theme }) => theme.font.size.xxextra} * 0.6);
    line-height: 6rem;
  }

  @media screen and (min-width: 690px) and (max-width: 1023px) {
    font-size: calc(${({ theme }) => theme.font.size.xxextra} * 0.8);
    line-height: 8rem;
  }
`

export const SectionsH2 = styled.h2`
  width: ${props => (props.width ? props.width : "100%")};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  font-size: ${({ theme }) => theme.font.size.xextra};
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
  text-transform: uppercase;
  line-height: 6rem;
  letter-spacing: -3px;
  & > span {
    color: ${({ theme }) => theme.colors.red};
  }
  & + p {
    margin-top: 2rem;
  }

  @media screen and (max-width: 376px) {
    font-size: calc(${({ theme }) => theme.font.size.xextra} * 0.6);
    line-height: 4rem;
  }

  @media screen and (min-width: 376px) and (max-width: 1023px) {
    font-size: calc(${({ theme }) => theme.font.size.xextra} * 0.8);
    line-height: 5rem;
  }
`

export const SectionsH3 = styled.h3`
  width: ${props => (props.width ? props.width : "100%")};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  font-size: ${({ theme }) => theme.font.size.extra};
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
  text-transform: uppercase;
  line-height: 4rem;
  letter-spacing: -1px;
  & > span {
    color: ${({ theme }) => theme.colors.red};
  }
  & + p {
    margin-top: 2rem;
  }

  @media screen and (max-width: 376px) {
    font-size: calc(${({ theme }) => theme.font.size.extra} * 0.6);
    line-height: 2.8rem;
  }

  @media screen and (min-width: 376px) and (max-width: 1023px) {
    font-size: calc(${({ theme }) => theme.font.size.extra} * 0.8);
    line-height: 3.4rem;
  }
`

export const SectionsH4 = styled.h4`
  width: ${props => (props.width ? props.width : "100%")};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  font-size: ${({ theme }) => theme.font.size.xxlarge};
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
  text-transform: uppercase;
  line-height: 3.4rem;
  letter-spacing: 0px;
  & > span {
    color: ${({ theme }) => theme.colors.red};
  }
  & + p {
    margin-top: 2rem;
  }

  @media screen and (max-width: 376px) {
    font-size: calc(${({ theme }) => theme.font.size.xxlarge} * 0.6);
    line-height: 2.6rem;
  }

  @media screen and (min-width: 376px) and (max-width: 1023px) {
    font-size: calc(${({ theme }) => theme.font.size.xxlarge} * 0.8);
    line-height: 3rem;
  }
`

export const SectionsH5 = styled.h5`
  width: ${props => (props.width ? props.width : "100%")};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  font-size: ${({ theme }) => theme.font.size.xlarge};
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
  text-transform: uppercase;
  line-height: 3.2rem;
  letter-spacing: 0px;
  & > span {
    color: ${({ theme }) => theme.colors.red};
  }
  & + p {
    margin-top: 2rem;
  }

  @media screen and (max-width: 376px) {
    font-size: calc(${({ theme }) => theme.font.size.xlarge} * 0.6);
    line-height: 2.4rem;
  }

  @media screen and (min-width: 376px) and (max-width: 1023px) {
    font-size: calc(${({ theme }) => theme.font.size.xlarge} * 0.8);
    line-height: 2.8rem;
  }
`

export const SectionsH6 = styled.h6`
  width: ${props => (props.width ? props.width : "100%")};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${props =>
    props.fontWeight
      ? ({ theme }) => theme.font.weight[props.fontWeight]
      : ({ theme }) => theme.font.weight.extrabold};
  text-transform: uppercase;
  line-height: 2.4rem;
  letter-spacing: 0px;
  & > span {
    color: ${({ theme }) => theme.colors.red};
  }
  & + p {
    margin-top: ${props => (props.marginTop ? props.marginTop : "2rem")};
  }
`

export const SectionsP = styled.p`
  width: ${props => (props.width ? props.width : "100%")};
  text-transform: ${props =>
    props.textTransform ? props.textTransform : "none"};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  font-size: ${props =>
    props.fontSize
      ? ({ theme }) => theme.font.size[props.fontSize]
      : ({ theme }) => theme.font.size.small};
  & + div {
    margin-top: ${props => (props.marginTop ? props.marginTop : "2rem")};
  }
`
