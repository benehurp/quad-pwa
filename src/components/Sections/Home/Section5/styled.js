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

export const SectionWrapper = styled(SectionsWrapper)`
  grid-column: 2/3;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    width: 70%;
  }
  .number {
    display: block;
    font-size: 18rem;
    font-weight: ${({ theme }) => theme.font.weight.extrabold};
    position: absolute;
    top: -5.8rem;
    left: 3rem;
    color: ${({ theme }) => theme.colors.red2};
  }
  ul {
    margin-top: 3rem;
    display: flex;
    gap: 2rem;
  }
`

export const TitleH1 = styled(SectionsH1)``

export const TitleH2 = styled(SectionsH2)``

export const TitleH3 = styled(SectionsH3)``

export const TitleH4 = styled(SectionsH4)``

export const TitleH5 = styled(SectionsH5)``

export const TitleH6 = styled(SectionsH6)``

export const Paragraph = styled(SectionsP)``

export const Card = styled(CardGradientBase)`
  padding: 16rem 3rem 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`
