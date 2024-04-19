import { connect } from './config/database.js'
import express from 'express'
import DevURouter from './Routes/ExStudentRoutes.js'

const PORT = process.env.PORT || 3000
connect()

const api = express()
api.use(express.json())

api.use('/api/v1', DevURouter)

api.listen(PORT, () => {
  console.log('Server is running')
})
