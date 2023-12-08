const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors(
  {
    origin:[],
    methods:['POST', 'GET'],
    credentials:true

  }
));
app.use(express.json());

mongoose.connect('mongodb+srv://prajakta:praju%40123@cluster0.jz314qu.mongodb.net/todo?retryWrites=true&w=majority');
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

const todoRoutes = require('./routes/todoRoutes');
app.use('/todos', todoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
