import { ApolloClient, InMemoryCache } from '@apollo/client';

export default client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache(),
});