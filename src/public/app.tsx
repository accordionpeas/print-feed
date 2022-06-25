import { ThemeProvider } from 'styled-components'
import fetch from 'cross-fetch'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client'
import GlobalStyle from './styles/global'
import theme from './styles/theme'
import Header from './components/header'
import HomePage from './pages/home'

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        feed: {
          keyArgs: false,
          merge(existing, incoming) {
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
