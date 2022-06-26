import { ThemeProvider } from 'styled-components'
import fetch from 'cross-fetch'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client'
import GlobalStyle from './styles/global'
import theme from './styles/theme'
import Header from './components/header'
import HomePage from './pages/home'
import { IFeedData } from './queries/feed'

// merge incoming prints array onto existing prints array.
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        feed: {
          keyArgs: false,
          merge(existing?: IFeedData['feed'], incoming?: IFeedData['feed']) {
            return {
              ...incoming,
              prints: [...(existing?.prints || []), ...(incoming?.prints || [])],
            }
          },
        },
      },
    },
  },
})

// set fetch as cross-fetch so that this code does
// not throw an error on the server
const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql', fetch }),
  cache,
})

const App = () => (
  <>
    <GlobalStyle />
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Header />
        <HomePage />
      </ThemeProvider>
    </ApolloProvider>
  </>
)

export default App
