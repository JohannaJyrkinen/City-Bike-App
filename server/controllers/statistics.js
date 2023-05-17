const Journey = require('../models/journey')
const statisticsRouter = require('express').Router()

statisticsRouter.get('/', async (req, res) => {
  try {
    const stationId = req.query.stationid
    const departures = await Journey.find({ departureStationId: stationId })
    const returns = await Journey.find({ returnStationId: stationId })
    const details = {
      stationID: stationId,
      departuresAmount: departures.length,
      returnsAmount: returns.length,
    }
    res.json(details)
  } catch (error) {
    console.log(error)
  }
})

module.exports = statisticsRouter