const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
  timestamp: Number,
  coords: {
    latitude: Number,
    longitude: Number,
    altitude: Number,
    accuracy: Number,
    heading: Number,
    speed: Number
  }
});

const trackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' //! points to an instance of a user within MongoDB
  },
  name: {
    type: String,
    default: ''
  },
  locations: [pointSchema] //! points to a seperate schema object
});

mongoose.model('Track', trackSchema);
