const Station = require('../models/station')
const stationsRouter = require('express').Router()

stationsRouter.get('/', async (req, res) => {
  try {
    const pageNumber = parseInt(req.query.pageNumber, 10) || 0
    const limit = parseInt(req.query.limit, 10) || 25
    const query = req.query.query || ''

    const results = {}
    let totalStations
    let stationsQuery = {}

    if (query) {
      stationsQuery.Nimi = { $regex: new RegExp(query, 'i') } 
      totalStations = await Station.countDocuments(stationsQuery).exec()
    } else {
      totalStations = await Station.countDocuments().exec()
    }

    const startIndex = Math.max((pageNumber - 1) * limit, 0)
    const endIndex = pageNumber * limit
      
    if (startIndex > 0) {
      results.previous = {
        pageNumber: pageNumber -1,
        limit: limit, 
        query: query,
      }
    }
    if (endIndex < totalStations) {
      results.next = {
        pageNumber: pageNumber + 1,
        limit: limit,
        query: query,

      }
    }

    if (query) {
      results.data = await Station.find(stationsQuery)
        .sort({})
        .limit(limit)
        .skip(startIndex)
        .exec()
    } else {
      results.data = await Station.find({})
        .sort({})
        .limit(limit)
        .skip(startIndex)
        .exec()
    }  
    results.rows = limit
    return res.json({stations: results})
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: error })
  }
    
})

stationsRouter.post('/', async (req, res) => {
  try {
    const stationData = req.body
    if (!stationData.ID || !stationData.Nimi || !stationData.Osoite || !stationData.Kaupunki || !stationData.x || !stationData.y) {
      return res.status(400).json({ msg: 'Required fields are missing' })
    }
    const newStation = new Station(stationData)
    const savedStation = await newStation.save()
    return res.status(201).json(savedStation)

  } catch (error){
    console.log(error)
    return res.status(500).json({ msg: error })
  } 
})

module.exports = stationsRouter 