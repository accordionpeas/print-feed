import Card from '../../components/card'
import PaginationControls from '../../components/pagination-controls'
import { StyledWrapper, StyledGrid } from './styled'

const Home = () => (
  <>
    <StyledWrapper>
      <StyledGrid>
        <Card
          title="Card title 1"
          description="Card description 1"
          imageUrl="https://nrs.harvard.edu/urn-3:HUAM:DDC251092_dynmc"
        />
        <Card
          title="Card title 2"
          description="Card description 2"
          imageUrl="https://nrs.harvard.edu/urn-3:HUAM:DDC251092_dynmc"
        />
        <Card
          title="Card title 3"
          description="Card description 3"
          imageUrl="https://nrs.harvard.edu/urn-3:HUAM:DDC251092_dynmc"
        />
        <Card
          title="Card title 4"
          description="Card description 4"
          imageUrl="https://nrs.harvard.edu/urn-3:HUAM:DDC251092_dynmc"
        />
        <Card
          title="Card title 5"
          description="Card description 5"
          imageUrl="https://nrs.harvard.edu/urn-3:HUAM:DDC251092_dynmc"
        />
        <Card
          title="Card title 6"
          description="Card description 6"
          imageUrl="https://nrs.harvard.edu/urn-3:HUAM:DDC251092_dynmc"
        />
      </StyledGrid>
    </StyledWrapper>
    <PaginationControls />
  </>
)

export default Home
