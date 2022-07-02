import express from 'express'
import cors from 'cors'
import { db, testConnection } from './database'
import { User } from './models'
import { userRoutes } from './routes/users.routes'

const app = express()

//MIDDLEWAREs
app.use(cors())
app.use(express.json())

//Database
testConnection(db)

//ROUTES
app.use('/api', userRoutes)

export default app
