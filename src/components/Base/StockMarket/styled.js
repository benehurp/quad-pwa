import styled from "styled-components"

export const StockMarketWrapper = styled.aside`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray2};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.xsmall};
  font-weight: ${({ theme }) => theme.font.weight.normal};
`
export const StockMarketList = styled.ul`
  width: 100%;
  line-height: 5rem;
  display: flex;
  position: relative;
  right: 0;
  animation: moveLeftMarket 30s linear 0.1s infinite running;
  & li::before {
    content: "";
    border-left: 3px solid;
    padding: 0.3rem 0;
    margin: 0 1.5rem;
  }

  li {
    width: auto;
    white-space: nowrap;
  }

  .price {
    margin: 0 0.5rem;
  }
  .name {
    font-weight: ${({ theme }) => theme.font.weight.extrabold};
  }
  .arrow {
    transform: translateY(0.2rem) translateX(0rem);
    width: 1.2rem;
    line-height: 2rem;
  }
  .down {
    color: ${({ theme }) => theme.colors.red};
  }
  .up {
    color: ${({ theme }) => theme.colors.green};
  }
  .pct {
    margin: 0 0.5rem;
  }
  @keyframes moveLeftMarket {
    0% {
      right: 0%;
    }
    100% {
      right: 100%;
    }
  }
`
