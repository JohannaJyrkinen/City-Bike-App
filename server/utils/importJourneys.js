
const csv = require('fast-csv');
const fs = require('fs');
const Journey = require('../models/journey');

const importJourneys = async () => {
  console.log('Beginning to import journeys to MongoDB');
  const filePath = './2021-05.csv';
  //const filePath= './2021-06.csv'
  let journeys = [];
  let counter= 0; 
  let invalidData =0
  const readStream = fs.createReadStream(filePath);

  const parser = csv.parse({ headers: true, ignoreEmpty: true })
    .validate((data) => validateData(data))
    .on('data', async (data) => {
      ++counter

      const mappedData = {
        departure: data.Departure,
        return: data.Return,
        departureStationId: data["Departure station id"],
        departureStation: data["Departure station name"],
        returnStationId: data["Return station id"],
        returnStation: data["Return station name"],
        distance: data["Covered distance (m)"],
        duration: data["Duration (sec.)"],
      };
      journeys.push(mappedData);

      if (counter >= 1000) {
        parser.pause()
        await Journey.insertMany(journeys);
        journeys = [];
        parser.resume(); 
      }
    })
    .on('data-invalid', () => ++invalidData)
    .on('error', (error) => {
      console.log('An error occurred:', error);
    })
    .on('end', async () => {
        console.log('parsing done, inserting last')
        await Journey.insertMany(journeys);
        journeys = []
        console.log('Found ', invalidData, ' invalid rows')
      
    });

  readStream.pipe(parser);
};


const validateData = (data) => {

  if(
    parseInt(data["Covered distance (m)"]) < 10 ||
    parseInt(data["Duration (sec.)"]) < 10
  ) {
    return false; 
  } else {
  return true; 
  }
}

module.exports = importJourneys;
