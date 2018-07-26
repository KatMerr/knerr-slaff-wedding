import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'
import mongoose from 'mongoose'
import { getSecret } from './secrets'
import GuestRoutes from './routes/guest.routes'

const app = express()

const API_PORT = getSecret("apiPort") || 3001

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(logger('dev'))

mongoose.connect(getSecret("dbUri"))
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection Error'))

app.use('/api', GuestRoutes)

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`))