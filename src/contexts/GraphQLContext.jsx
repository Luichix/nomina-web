import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'

const link = createUploadLink({
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
})

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

export const GraphQLProvider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
