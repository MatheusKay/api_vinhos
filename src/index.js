import express from 'express'
import cors from 'cors'

import routes from './routes.js'
import connectDatabase from './database/db.js'

const server = express()

const corsOptions = {
    origin: 'https://api-vinhos.vercel.app/vinhos',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}

server.use(express.json())
server.use(routes)
server.use(cors(corsOptions))

connectDatabase().then(() => {
    server.listen(3500, () => console.log('Api voando'))
}).catch((error) => console.log(error))