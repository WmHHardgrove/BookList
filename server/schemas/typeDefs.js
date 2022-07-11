const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!,
        username: String!
        email: String,
        bookCount: Int, 
        savedBooks: [Book]
    },
    type Book {
        bookId:ID!,
        title: String!,
        authors: [String],
        image: String,
        link: String,
        descriptions: String
    },
    
    type Query {
        me: User
    },
    type Mutation {
        addUser

    }
`;