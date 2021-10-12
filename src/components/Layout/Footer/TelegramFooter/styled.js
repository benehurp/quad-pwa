import styled from "styled-components"

export const TelegramWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.blue2};
  display: grid;
  grid-template-columns: ${({ theme }) => theme.breakingPoints.normal};

  .telegram-container {
    grid-column: 2/3;
    display: flex;
    width: 100%;
    height: 12rem;
    gap: 1rem;
    font-size: ${({ theme }) => theme.font.size.xsmall};
    font-weight: ${({ theme }) => theme.font.weight.semibold};
    justify-content: center;
    align-items: center;

    .left {
      width: 50%;
      align-self: center;
      text-align: center;
      padding: 0 5rem;
      word-wrap: break-word;

      @media screen and (max-width: 768px) {
        width: 50%;
        padding: 0 2rem;
      }
    }

    .right {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 5rem;

      @media screen and (max-width: 768px) {
        padding: 0 2rem;
      }
    }

    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
      height: 16rem;
    }
  }
`
