const mongoose = require('mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
const stationRouter = require('./controllers/stations')
require('dotenv').config()
const config = require('./utils/config')
const Station = require('./models/station')
//const importStations = require('./utils/importStations')



console.log('connecting...')
  
const mongoDB = config.MONGODB_URI
  mongoose.connect(mongoDB)
    .then(result => {
        console.log('connected to MongoDB')
    
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
})

app.use(cors())
app.use(express.json())
app.use('/api/stations', stationRouter)

//Already imported: stations
//importStations(); 

const PORT = config.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

