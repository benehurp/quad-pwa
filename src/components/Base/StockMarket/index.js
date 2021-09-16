import React from "react"
import * as S from "./styled"
import ArrowUp from "../../../images/svg/arrow-up.svg"
import ArrowDown from "../../../images/svg/arrow-down.svg"

export const StockMarket = () => {
  return (
    <S.StockMarketWrapper>
      <S.StockMarketList>
        <li>
          <span className="name">DOWN JONES</span>
          <span className="price">R$ 27,51</span>
          <img src={ArrowUp} alt="Ativo em alta" className="arrow" />
          <span className="pct up">+0,45%</span>
        </li>
        <li>
          <span className="name">DOWN JONES</span>
          <span className="price">R$ 27,51</span>
          <img src={ArrowDown} alt="Ativo em baixa" className="arrow" />
          <span className="pct down">-0,45%</span>
        </li>
        <li>
          <span className="name">DOWN JONES</span>
          <span className="price">R$ 27,51</span>
          <img src={ArrowUp} alt="Ativo em alta" className="arrow" />
          <span className="pct up">-0,45%</span>
        </li>
        <li>
          <span className="name">DOWN JONES</span>
          <span className="price">R$ 27,51</span>
          <img src={ArrowDown} alt="Ativo em baixa" className="arrow" />
          <span className="pct down">+0,45%</span>
        </li>
        <li>
          <span className="name">DOWN JONES</span>
          <span className="price">R$ 27,51</span>
          <img src={ArrowUp} alt="Ativo em alta" className="arrow" />
          <span className="pct up">-0,45%</span>
        </li>
      </S.StockMarketList>
    </S.StockMarketWrapper>
  )
}
