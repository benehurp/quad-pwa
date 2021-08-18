import styled from "styled-components"

export const ButtonWrapper = styled.div`
  width: 20rem;
  height: 2rem;
  gap: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ButtonCss = styled.button`
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    filter: brightness(0.85);
  }
`

export const ButtonCssTelegram = styled(ButtonCss)`
  width: 10rem;
  height: 2rem;
  color: var(--blue-telegram);
  background-color: var(--clear);
  padding: 0.5rem;
  border-radius: 2rem;
`

export const ButtonCssLogin = styled(ButtonCss)`
  width: 8rem;
  height: 2rem;
  text-transform: uppercase;
  color: var(--clear);
  background-image: linear-gradient(
    to right,
    var(--primary-red),
    var(--secundary-red)
  );
  padding: 0.5rem;
  border-radius: 2rem;
`
