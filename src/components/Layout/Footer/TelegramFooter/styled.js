import styled from "styled-components"

export const TelegramWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.blueTwo};
  width: 100%;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-size: 1.2rem;
  text-align: right;
  font-weight: 600;
  letter-spacing: 1px;
`
