import styled from 'styled-components'

export const StyledWrapper = styled.div`
  padding: ${(props) => props.theme.spacers.xl};
  flex: 1;
  overflow: auto;
`

export const StyledGrid = styled.div`
  display: grid;
  gap: ${(props) => props.theme.spacers.xl};
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`

export const StyledErrorMessage = styled.p`
  font-size: 16px;
  text-align: center;
  color: ${(props) => props.theme.colors.red};
`
