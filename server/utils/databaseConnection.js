const mongoose = require('mongoose')
const config = require('./config')

const connectMongoDB= () => {
    console.log('connecting...')
  
    const mongoDB = config.MONGODB_URI
    mongoose.connect(mongoDB)
        .then(result => {
         console.log('connected to MongoDB')
    
        })
        .catch((error) => {
            console.log('error connecting to MongoDB:', error.message)
})

}

module.exports = connectMongoDB
