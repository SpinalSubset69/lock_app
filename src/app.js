import express from 'express'
import cors from 'cors'
import { db, connectToDatabase } from './database'
import { BuildDBAssociations } from './models'
import {
  authRoutes,
  passwordsRoutes,
  userRoutes,
  categoriesRoutes,
} from './routes'

const app = express()

//MIDDLEWAREs
app.use(cors())
app.use(express.json())

//Database
connectToDatabase(db)
//BuildDBAssociations
BuildDBAssociations()

//ROUTES
app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/passwords', passwordsRoutes)
app.use('/api/categories', categoriesRoutes)
export default app
