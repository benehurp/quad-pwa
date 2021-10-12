import styled, { css } from "styled-components"
import { Link } from "gatsby"

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

export const MenuMobileContainer = styled.aside`
  width: 100%;
  height: 91vh;
  position: fixed;
  left: 0;
  top: 9rem;
  overflow: auto;
  background: ${({ theme }) => theme.colors.white};
  z-index: 100;
  --opacity: 1;
  animation-name: fadeIn;
  animation-timing-function: linear;
  animation-duration: 0.3s;
  opacity: var(--opacity);

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: var(--opacity);
    }
  }
`

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  color: black;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  gap: 2rem;
  padding: 2rem 5rem;

  .buttons-wrapper {
    padding-top: 3rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    width: 100%;
  }
`

export const MenuItem = styled.li`
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.gray3};
  padding: 0 0 1rem;
  margin-top: 2rem;
  width: 100%;

  ${props =>
    props.disable === "true" &&
    css`
      opacity: 0.1;
    `}
`

export const MenuLink = styled(Link)`
  color: ${({ theme }) => theme.colors.gray3};
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.red};
  }

  ${props =>
    props.disable === "true" &&
    css`
      &:hover {
        color: ${({ theme }) => theme.colors.gray3};
        cursor: unset;
        text-decoration: none;
      }
    `}
`
