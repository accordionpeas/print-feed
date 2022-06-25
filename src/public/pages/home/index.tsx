import { useQuery } from '@apollo/client'
import Card from '../../components/card'
import Flex from '../../components/flex'
import ActivityIndicator from '../../components/activity-indicator'
import feedQuery, { IFeedData, IFeedVariables } from '../../queries/feed'
import { StyledWrapper, StyledGrid, StyledErrorMessage } from './styled'
import { useInfiniteScroll } from './hooks'

const Home = () => {
  const { loading, error, data, fetchMore } = useQuery<IFeedData, IFeedVariables>(feedQuery, {
    notifyOnNetworkStatusChange: true,
    variables: {
      page: 1,
    },
  })

  const currentPage = data?.feed.page ?? 0

  const loadMoreTarget = useInfiniteScroll({ currentPage, loading, fetchMore })

  return (
    <>
      {error && (
        <Flex flex={1} justify="center" align="center">
          <StyledErrorMessage>Whoops, an error occurred</StyledErrorMessage>
        </Flex>
      )}
      <StyledWrapper>
        <StyledGrid>
          {data?.feed.prints.map(({ id, title, description, imageUrl }) => (
            <Card key={id} title={title} description={description} imageUrl={imageUrl} />
          ))}
        </StyledGrid>
        <div ref={loadMoreTarget} />
        {loading && (
          <Flex justify="center">
            <ActivityIndicator />
          </Flex>
        )}
      </StyledWrapper>
    </>
  )
}

export default Home
