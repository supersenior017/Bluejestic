import nookies from 'nookies'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { GRAPHQL_SERVER_URL } from 'src/config/constant'
import { createUploadLink } from 'apollo-upload-client'

const httpLink = createUploadLink({
  uri: GRAPHQL_SERVER_URL,
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from cookies
  const { token } = nookies.get()
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default client
