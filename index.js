import {ApolloServer} from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

//db
import db from './_db.js'

//import types
import { typeDefs } from './schema.js'


const resolvers = {
    Query: {
        games (){
            return db.games
        },
        reviews (){
            return db.reviews
        },
        authors (){
            return db.authors
        }
    }
}

//server setup
const server = new ApolloServer({
    //takes 2 properties
    //typedefs
    typeDefs,
    //resolvers
    resolvers

})

const {url} = await startStandaloneServer(server, {
    listen: { port: 4000}
})

console.log('we up at port ', 4000);