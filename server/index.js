const express = require('express')
const connectMongoDB = require('./utils/databaseConnection')
const cors = require('cors')
const stationRouter = require('./controllers/stations')
const journeyRouter = require('./controllers/journeys')
const statisticsRouter = require('./controllers/statistics')
require('dotenv').config()
const config = require('./utils/config')

connectMongoDB() 

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/stations', stationRouter)
app.use('/api/journeys', journeyRouter)
app.use('/api/statistics', statisticsRouter)

//Commented function calls, datasets are no longer empty
//const importJourneys = require('./utils/importJourneys')
//const importStations = require('./utils/importStations')
//importStations()   
//importJourneys();


const PORT = config.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

