import styled from "styled-components"
import {
  SectionsWrapper,
  CardGradientBase,
  SectionsH1,
  SectionsH2,
  SectionsH3,
  SectionsH4,
  SectionsH5,
  SectionsH6,
  SectionsP,
} from "../../styledSections"

export const Section2Wrapper = styled(SectionsWrapper)`
  .container {
    grid-column: 2/3;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .left {
    width: 50%;
    position: relative;
    left: 0;
    top: 0;
  }
  .right {
    width: 50%;
  }
  .big-logo {
    position: absolute;
    display: flex;
    align-items: center;
    top: -24rem;
    left: -23rem;
    width: 58rem;
    height: auto;
  }
  .big-logo-title {
    margin-bottom: 2rem;
    font-size: ${({ theme }) => theme.font.size.xlarge};
    line-height: 2.8rem;
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.font.weight.extrabold};
  }
`
export const TitleH1 = styled(SectionsH1)``

export const TitleH2 = styled(SectionsH2)``

export const TitleH3 = styled(SectionsH3)``

export const TitleH4 = styled(SectionsH4)``

export const TitleH5 = styled(SectionsH5)``

export const TitleH6 = styled(SectionsH6)``

export const Paragraph = styled(SectionsP)``

export const Card = styled(CardGradientBase)``
