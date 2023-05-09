const csv = require('fast-csv');
const fs = require('fs');
const Journey = require('../models/journey')


const importJourneys = () => {

  console.log('importing journeys to MongoDB')

  let journeys = []
  const filePath = ('')

  fs.createReadStream(filePath)
    .pipe(csv.parse({headers: true, ignoreEmpty: true}))
    .on('data', (data) => {
      journeys.push({...data})
    })
    .on('error', (error) =>{
      console.log('whoops, error occurred', error)
    })
    .on('end', async () => {
      await Journey.insertMany(journeys)
      journeys = [];
      console.log('Station data imported successfully.');
  });

}

module.exports = importJourneys;