const Station = require('../models/station')
const stationsRouter = require('express').Router()

stationsRouter.get('/', async (req, res) => {
  try {
    const pageNumber = parseInt(req.query.pageNumber, 10) || 0
    const limit = parseInt(req.query.limit, 10) || 25
    const results = {}
    const totalStations = await Station.countDocuments().exec()
    const startIndex = (pageNumber - 1) * limit
    const endIndex = pageNumber * limit
      
    if (startIndex > 0) {
      results.previous = {
        pageNumber: pageNumber -1,
        limit: limit, 
      }
    }
    if (endIndex < totalStations) {
      results.next = {
        pageNumber: pageNumber + 1,
        limit: limit,

      }
    }
    results.data = await Station.find({})
      .sort({})
      .limit(limit)
      .skip(startIndex)
      .exec()
    results.rows = limit
    return res.json({stations: results})
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: error })
  }
    
})

module.exports = stationsRouter 