import styled from "styled-components"
import { SectionsWrapper } from "../../styled"

export const SectionTwoWrapper = styled(SectionsWrapper)`
  .card {
    grid-column: 2/3;
    display: flex;
    align-items: center;
    justify-content: right;
    margin-left: 13rem;
    margin-right: 13rem;
    padding: 5rem;
    background: linear-gradient(
      211deg,
      rgba(63, 74, 85, 1) 0%,
      rgba(15, 22, 37, 1) 90%
    );

    border-radius: 2rem;
    box-shadow: 5px 0px 15px var(--bg-tertiary);
  }
  .big-logo {
    width: 44rem;
    position: relative;
    left: 0;
    top: 0;
  }
  .big-logo-container {
    position: absolute;
    display: flex;
    align-items: center;
    top: -22rem;
    left: -21rem;
    width: 55rem;
    height: auto;
  }
  .big-logo-title {
    margin-bottom: 2rem;
    font-size: ${({ theme }) => theme.font.size.xlarge};
    line-height: 2.8rem;
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.font.weight.extrabold};
  }
  .big-logo-description {
    width: 32rem;
  }
`
