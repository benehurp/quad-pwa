import styled from "styled-components"

export const ButtonWrapperStyled = styled.div`
  width: auto;
  height: 2rem;
  gap: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`
