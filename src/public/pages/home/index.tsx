import { useQuery } from '@apollo/client'
import Card from '../../components/card'
import Flex from '../../components/flex'
import ActivityIndicator from '../../components/activity-indicator'
import PaginationControls from '../../components/pagination-controls'
import printQuery, { IPrintData } from '../../queries/prints'
import { StyledWrapper, StyledGrid, StyledErrorMessage } from './styled'

const Home = () => {
  const { loading, error, data } = useQuery<IPrintData>(printQuery)

  return (
    <>
      {loading && (
        <Flex flex={1} justify="center" align="center">
          <ActivityIndicator />
        </Flex>
      )}
      {error && (
        <Flex flex={1} justify="center" align="center">
          <StyledErrorMessage>Whoops, an error occurred</StyledErrorMessage>
        </Flex>
      )}
      <StyledWrapper>
        {!!data?.prints?.length && (
          <StyledGrid>
            {data.prints.map(({ id, title, description, imageUrl }) => (
              <Card key={id} title={title} description={description} imageUrl={imageUrl} />
            ))}
          </StyledGrid>
        )}
      </StyledWrapper>
      <PaginationControls />
    </>
  )
}

export default Home
