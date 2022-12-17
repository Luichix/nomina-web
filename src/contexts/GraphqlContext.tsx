import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  split,
  HttpLink,
} from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { PropsWithChildren } from 'react'

const BASE_HTTP_URL = process.env.NEXT_PUBLIC_HTTP_GRAPHQL_ENDPOINT
const BASE_WS_URL = process.env.NEXT_PUBLIC_WS_GRAPHQL_ENDPOINT

const httpLink = new HttpLink({
  uri: BASE_HTTP_URL,
})

const wsLink =
  typeof window !== 'undefined'
    ? new GraphQLWsLink(
        createClient({
          url: BASE_WS_URL,
        })
      )
    : null

const splitLink =
  typeof window !== 'undefined' && wsLink !== null
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query)
          return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
          )
        },
        wsLink,
        httpLink
      )
    : httpLink

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
})

const GraphqlProvider = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default GraphqlProvider
