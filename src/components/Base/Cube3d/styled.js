import styled from "styled-components"

export const Cube = styled.div`
  background: ${({ theme }) => theme.colors.red};
  width: 100%;
  height: 100%;
`
export const Front = styled(Cube)`
  background: ${({ theme }) => theme.colors.gray4};
`
export const Back = styled(Cube)`
  background: ${({ theme }) => theme.colors.gray4};
`
export const Right = styled(Cube)``
export const Left = styled(Cube)``
export const Top = styled(Cube)`
  background: ${({ theme }) => theme.colors.red2};
`
export const Bottom = styled(Cube)`
  background: ${({ theme }) => theme.colors.red2};
`
