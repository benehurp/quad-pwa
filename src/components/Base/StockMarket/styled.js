import styled from "styled-components"

export const StockMarketWrapper = styled.aside`
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.gray2};
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.xsmall};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  line-height: 2rem;
`
export const StockMarketList = styled.ul`
  display: flex;
  position: relative;
  right: 0;
  animation-name: moveLeftMarket;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 30s;
  & li::before {
    content: "";
    border-left: 3px solid;
    padding: 0.3rem 0;
    margin: 0 1.5rem;
  }
  .stock-market-price {
    margin: 0 0.5rem;
  }
  .stock-market-name {
    font-weight: 700;
  }
  .arrow {
    width: 1.2rem;
    line-height: 2rem;
    position: relative;
    top: 4px;
  }
  .down {
    color: ${({ theme }) => theme.colors.red};
  }
  .up {
    color: ${({ theme }) => theme.colors.green};
  }
  .stock-market-pct {
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
