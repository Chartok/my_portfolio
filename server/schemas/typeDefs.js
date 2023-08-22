const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Project {
        id: ID!
        title: String!
        description: String!
        link: String!
        image: String!
    }

    type Query {
        projects: [Project!]!
    }

    type Mutation {
        addProject(title: String!, description: String!, link: String!, image: String!): Project!
    }
`;

module.exports = typeDefs;
