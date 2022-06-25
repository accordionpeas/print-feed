import { StyledWrapper, StyledButton } from './styled'
import Flex from '../flex'

const PaginationControls = () => (
  <StyledWrapper>
    <Flex justify="space-between">
      <StyledButton>&lt; Previous page</StyledButton>
      <StyledButton>Next page &gt;</StyledButton>
    </Flex>
  </StyledWrapper>
)

export default PaginationControls
