require('dotenv').config();
require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = `mongodb+srv://admin:${process.env.DB_PASS}@pathfinder.94gaj.mongodb.net/<dbname>?retryWrites=true&w=majority`;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
  console.log('Connected to mongoDB');
});
mongoose.connection.on('error', (err) => {
  console.log('Error connecting to DB', err);
});

app.get('/', requireAuth, (req, res) => {
  res.send(`Youre email: ${req.user.email}`);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
