import styled from "styled-components"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
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
  padding-top: 8rem;
  padding-bottom: 8rem;

  @media screen and (max-width: 599px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .container {
    grid-column: 2/3;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .avatar-container {
    position: relative;
    left: 0;
    top: -5.5rem;
    transform: translateY(-4.5rem) translateX(-4.5rem);
  }
  .avatar {
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    position: absolute;
    z-index: 100;
  }
  & .left {
    width: 6rem;
    padding: 1rem;
    transform: rotateY(180deg);
  }
  & .right {
    padding: 1rem;
    width: 6rem;
  }
  .swiper {
    width: 100%;
    overflow: hidden;
    padding: 10rem 5rem 5rem;
    margin: 2rem 0;
    position: relative;

    @media screen and (max-width: 599px) {
      padding: 10rem 0rem 5rem;
    }

    .quotes {
      display: flex;
      justify-content: space-between;
      position: absolute;
      width: 100%;
      top: 5rem;
      left: 0;
      z-index: 100;
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    top: 55%;
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    color: white;
    font-size: 30px;
  }
  .swiper-pagination {
    bottom: 0;
  }
  .swiper-pagination-bullet {
    background: red;
  }
  .btn-right {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .testimonial {
    height: 15rem;
    overflow: hidden;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`

export const TitleH1 = styled(SectionsH1)``

export const TitleH2 = styled(SectionsH2)``

export const TitleH3 = styled(SectionsH3)``

export const TitleH4 = styled(SectionsH4)``

export const TitleH5 = styled(SectionsH5)`
  height: 6rem;
`

export const TitleH6 = styled(SectionsH6)``

export const Paragraph = styled(SectionsP)``

export const Card = styled(CardGradientBase)`
  width: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  padding: 5rem 3rem 2rem;
`
