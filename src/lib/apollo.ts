import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl4rnsqal1awz01zc2qz1chre/master',
  cache: new InMemoryCache(),
  // connectToDevTools: true,
})
