import styled, { css } from "styled-components"

export const MenuMobileButton = styled.button`
  background: transparent;
  height: 40px;
  width: 40px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &::after,
  &::before {
    content: "";
    display: block;
    width: 3rem;
    height: 3px;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 7px ${({ theme }) => theme.colors.white},
      0 -7px ${({ theme }) => theme.colors.white};
    transition: 0.2s;

    ${props =>
      props.openMenu &&
      css`
        width: 8rem;
        height: 3px;
        transform: translateX(-50%) rotate(135deg);
        box-shadow: none;
      `}
  }
  &::before {
    opacity: 0;
    width: 0;
    height: 0;
    box-shadow: none;

    ${props =>
      props.openMenu &&
      css`
        opacity: 1;
        width: 8rem;
        height: 3px;
        transform: translateX(50%) rotate(45deg);
        box-shadow: none;
      `}
  }

  &:hover {
    &::after,
    &::before {
      background: ${({ theme }) => theme.colors.red};
      box-shadow: 0 7px ${({ theme }) => theme.colors.red},
        0 -7px ${({ theme }) => theme.colors.red};
      ${props =>
        props.openMenu &&
        css`
          box-shadow: none;
        `}
    }
  }
`
