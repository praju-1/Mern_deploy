const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const env = require("dotenv");
env.config()

const app = express();
const port = process.env.PORT || 5000;


app.use(cors(
  {
    origin:['https://mern-deploy-frontend-gules.vercel.app/'],
    methods:['POST', 'GET'],
    credentials:true

  }
));
app.use(express.json());

mongoose.connect(process.env.Mongo_url);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

app.get('/', (req, res)=>{
  res.json("hello")
})

const todoRoutes = require('./routes/todoRoutes');
app.use('/todos', todoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
