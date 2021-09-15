import { ApolloClient,InMemoryCache } from "@apollo/client";


export const Client=new ApolloClient({
    uri:"https://graphqlzero.almansi.me/api",
    cache:new  InMemoryCache()
})

