const csv = require('fast-csv')
const fs = require('fs')
const Station = require('../models/station')


const importStations = () => {

  console.log('importing stations to MongoDB')

  let stations = []
  const filePath = ('../asemat.csv')

  fs.createReadStream(filePath)
    .pipe(csv.parse({headers: true, ignoreEmpty: true}))
    .on('data', (data) => {
      stations.push({...data})
    })
    .on('error', (error) =>{
      console.log('whoops, error occurred', error)
    })
    .on('end', async () => {
      await Station.insertMany(stations)
      stations = []
      console.log('Station data imported successfully.')
    })

}

module.exports = importStations
