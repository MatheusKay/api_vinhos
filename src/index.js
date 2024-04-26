import express from 'express'
import cors from 'cors'

import routes from './routes.js'
import connectDatabase from './database/db.js'

const server = express()

server.use(cors())
server.use(express.json())
server.use(routes)

connectDatabase().then(() => {
    server.listen(3500, () => console.log('Api voando'))
}).catch((error) => console.log(error))