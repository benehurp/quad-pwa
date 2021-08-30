import styled from "styled-components"

export const TelegramWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.blue2};
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
`
