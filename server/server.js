require('dotenv').config({ path: '../.env'})
import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'
import mongoose from 'mongoose'
import GuestRoutes from './routes/guest.routes'
const path = require("path")

const app = express()
const API_PORT = process.env.API_PORT
const DB_URI = process.env.DB_URI

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(logger('dev'))
if (DB_URI){
    mongoose.connect(DB_URI)
    var db = mongoose.connection
    db.on('error', console.error.bind(console, 'MongoDB connection Error'))
} else {
    console.log("No URI for DB connection")
}
    
app.use('/api', GuestRoutes)

app.use(express.static(path.join(__dirname, "client", "build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT} DB URI: ${DB_URI}`))
