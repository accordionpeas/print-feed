import styled from 'styled-components'

export const StyledWrapper = styled.div`
  padding: ${(props) => props.theme.spacers.xl};
  background-color: ${(props) => props.theme.colors.black};
`

export const StyledButton = styled.button`
  background: ${(props) => props.theme.colors.blue};
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacers.small} ${(props) => props.theme.spacers.medium};
  border-radius: 3px;
`
