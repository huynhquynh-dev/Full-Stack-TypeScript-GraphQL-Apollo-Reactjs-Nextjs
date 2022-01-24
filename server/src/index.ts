require('dotenv').config()
import 'reflect-metadata'
import express from 'express'
import { createConnection } from 'typeorm'
import { User } from './entities/User'
import { Post } from './entities/Post'

const main = async () => {
    await createConnection({
        type: 'postgres',
        database: 'Reddit',
        username: process.env.DB_USERNAME_DEV,
        password: process.env.DB_PASSWORD_DEV,
        logging: true,
        synchronize: true, //check data create table not exits
        entities: [User, Post]
    })

    const app = express()
    app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));
}

main().catch(err => console.log(err));