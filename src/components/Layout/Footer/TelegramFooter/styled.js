import styled from "styled-components"

export const TelegramWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.blue2};

  .telegram-container {
    width: 100%;
    height: 12rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    font-size: ${({ theme }) => theme.font.size.xsmall};
    font-weight: ${({ theme }) => theme.font.weight.semibold};
    text-align: right;
    letter-spacing: 1px;

    @media screen and (max-width: 768px) {
      text-align: center;
      flex-direction: column-reverse;
      height: 18rem;
      margin: 0 2rem;
      width: auto;
    }
  }
`
