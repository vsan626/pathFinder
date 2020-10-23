require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const mongoUri = `mongodb+srv://admin:${process.env.DB_PASS}@pathfinder.94gaj.mongodb.net/<dbname>?retryWrites=true&w=majority`

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
mongoose.connection.on('connected', () => {
  console.log('Connected to mongoDB')
})
mongoose.connection.on('error', (err) => {
  console.log('Error connecting to DB', err)
})

app.get('/', (req, res) => {
  res.send('Hi')
});

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})