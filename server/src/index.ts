require("dotenv").config();
import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import { User } from "./entities/User";
import { Post } from "./entities/Post";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { UserResolver } from "./resolvers/user";
// import {Context} from './type/Context'
// import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'

const main = async () => {
    await createConnection({
        type: "postgres",
        database: "Reddit",
        username: process.env.DB_USERNAME_DEV,
        password: process.env.DB_PASSWORD_DEV,
        logging: true,
        synchronize: true, //check data create table not exits
        entities: [User, Post],
    });

    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, UserResolver],
            validate: false,
        }),
        // context: ({req, res}): Context => ({req, res}),
        // plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
    });

    await apolloServer.start()
    // Phần Comment là giải quyết lỗi version 2 apollo server khi gặp phải

    apolloServer.applyMiddleware({ app, cors: false });

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () =>
        console.log(
            `Server started on port ${PORT}. GraphQL server started on localhost ${PORT}${apolloServer.graphqlPath}`
        )
    );
};

main().catch((err) => console.log(err));
