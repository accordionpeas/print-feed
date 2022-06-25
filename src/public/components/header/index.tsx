import Flex from '../flex'
import Heading from '../heading'
import { StyledWrapper } from './styled'

const Header = () => (
  <StyledWrapper>
    <Flex justify="center">
      <Heading level={1}>Print Feed</Heading>
    </Flex>
  </StyledWrapper>
)

export default Header
