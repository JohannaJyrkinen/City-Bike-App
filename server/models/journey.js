const mongoose = require('mongoose');

const journeySchema = new mongoose.Schema({
    departure: {
      type: Date,
      default: undefined,
    },
    return: {
      type: Date,
      default: undefined,
    },
    departureStationId: {
      type: String,
      default: undefined,
    },
    departureStation: {
      type: String,
      default: undefined,
    },
    returnStationId: {
      type: String,
      default: undefined,
    },
    returnStation: {
      type: String,
      default: undefined,
    },
    distance: {
      type: Number,
      default: undefined,
    },
    duration: {
      type: Number,
      default: undefined,
    },
  });
  

const Journey = mongoose.model('Journey', journeySchema);

module.exports = Journey;
