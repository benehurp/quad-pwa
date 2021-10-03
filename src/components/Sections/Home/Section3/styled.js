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
  padding-top: 10rem;
  padding-bottom: 10rem;

  .container {
    grid-column: 2/3;
    width: 100%;
    display: flex;

    @media screen and (max-width: 1023px) {
      flex-direction: column;
    }

    .left {
      width: 50%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-end;

      @media screen and (max-width: 1023px) {
        width: 100%;
        align-items: center;
      }
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;

      @media screen and (max-width: 1023px) {
        width: 100%;
        height: 42rem;
      }
    }

    img.rotate3d {
      display: block;
      width: 45px;
      margin-bottom: 2rem;

      @media screen and (max-width: 1023px) {
        margin-top: 5rem;
      }
    }
  }
`

export const TitleH1 = styled(SectionsH1)``

export const TitleH2 = styled(SectionsH2)``

export const TitleH3 = styled(SectionsH3)``

export const TitleH4 = styled(SectionsH4)``

export const TitleH5 = styled(SectionsH5)``

export const TitleH6 = styled(SectionsH6)``

export const Paragraph = styled(SectionsP)``
