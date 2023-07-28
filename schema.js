export const typeDefs = `#graphql
    type Game {
        id: ID! #requires notation by "!"
        title: String!
        platform: [String!]! #outer shows the array is required but inner shows each element is required
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
    }
    type Query { #this is required as it shows the entrypoint to the graph
    #only what is included here is used as entrypoint. AKA gatekeeping...
    reviews: [Review]
    games: [Game]
    authors: [Author]
        
    }
`