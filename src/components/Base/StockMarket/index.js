import React from "react"
import * as S from "./styled"
import ArrowUp from "../../../images/svg/arrow-up.svg"
import ArrowDown from "../../../images/svg/arrow-down.svg"

export const StockMarket = () => {
  return (
    <S.StockMarketWrapper>
      <S.StockMarketList>
        <li>
          <span class="stock-market-name">DOWN JONES</span>
          <span class="stock-market-price">R$ 27,51</span>
          <img src={ArrowUp} alt="Ativo em alta" class="arrow" />
          <span class="stock-market-pct up">+0,45%</span>
        </li>
        <li>
          <span class="stock-market-name">DOWN JONES</span>
          <span class="stock-market-price">R$ 27,51</span>
          <img src={ArrowDown} alt="Ativo em baixa" class="arrow" />
          <span class="stock-market-pct down">-0,45%</span>
        </li>
        <li>
          <span class="stock-market-name">DOWN JONES</span>
          <span class="stock-market-price">R$ 27,51</span>
          <img src={ArrowUp} alt="Ativo em alta" class="arrow" />
          <span class="stock-market-pct up">-0,45%</span>
        </li>
        <li>
          <span class="stock-market-name">DOWN JONES</span>
          <span class="stock-market-price">R$ 27,51</span>
          <img src={ArrowDown} alt="Ativo em baixa" class="arrow" />
          <span class="stock-market-pct down">+0,45%</span>
        </li>
        <li>
          <span class="stock-market-name">DOWN JONES</span>
          <span class="stock-market-price">R$ 27,51</span>
          <img src={ArrowUp} alt="Ativo em alta" class="arrow" />
          <span class="stock-market-pct up">-0,45%</span>
        </li>
      </S.StockMarketList>
    </S.StockMarketWrapper>
  )
}
