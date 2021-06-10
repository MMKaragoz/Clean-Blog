const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const Posts = require('./models/Posts');
const methodOverride = require('method-override');
const pageRoute = require('./routes/pageRoute');
const postRoute = require('./routes/postRoute');

const app = express();

mongoose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middlewares
app.set('view engine', 'ejs');
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/', pageRoute);
app.use('/posts', postRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}.`);
});
