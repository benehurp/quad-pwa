import styled from "styled-components"
import {
  SectionsWrapper,
  SectionsH1,
  SectionsH2,
  SectionsH3,
  SectionsH4,
  SectionsH5,
  SectionsH6,
  SectionsP,
} from "../../styledSections"

export const SectionWrapper = styled(SectionsWrapper)`
  .container {
    grid-column: 2/3;
    width: 100%;
    display: flex;
  }
  .left {
    width: 50%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-end;
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
  }
  img.rotate3d {
    display: block;
    width: 45px;
    margin-bottom: 2rem;
  }
`

export const TitleH1 = styled(SectionsH1)``

export const TitleH2 = styled(SectionsH2)``

export const TitleH3 = styled(SectionsH3)``

export const TitleH4 = styled(SectionsH4)``

export const TitleH5 = styled(SectionsH5)``

export const TitleH6 = styled(SectionsH6)``

export const Paragraph = styled(SectionsP)``
