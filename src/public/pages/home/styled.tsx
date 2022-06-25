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
