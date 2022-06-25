import Heading from '../heading'
import Flex from '../flex'
import { StyledWrapper, StyledDescription, StyledImage } from './styled'

interface ICard {
  title: string
  imageUrl: string
  description: string
}

const Card = ({ title, imageUrl, description }: ICard) => (
  <StyledWrapper>
    <Heading level={2}>{title}</Heading>
    <Flex flex={1} align="flex-start" justify="center">
      <StyledImage src={imageUrl} />
    </Flex>
    <StyledDescription>{description}</StyledDescription>
  </StyledWrapper>
)

export default Card
