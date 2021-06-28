const express = require('express');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');

const app = express();

const AppRoutes = require('./routes/routes');

app.use(express.urlencoded({ extended: true }));

app.use(AppRoutes);

app.use(errorController.get404);

mongoose.connect('mongodb://localhost:27017/charts', { useNewUrlParser: true, useUnifiedTopology: true })
 .then(result => {
  console.log('Connected to DB and Up on server 5000')
  app.listen(5000);
 })
 .catch(err => {
  console.log(err)
 })
