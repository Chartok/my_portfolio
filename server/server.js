require('dotenv').config();
const express = require('express');
const { ApolloServer } = require
('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const mongoose = require('./config/DBconnection');

const app = express();


const server = new ApolloServer({
    typeDefs,
    resolvers,
});

async function startApollo() {
    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connection.once('open', () => {
    console.log('Connected to database...')
    app.use((err, req, res, next) => {
        console.error(err);
        res.status(500).send('Server Error');
    });
    app.listen(PORT, () => {
        console.log(`API initialized on localhost:${PORT}`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
    });
});

startApollo();
