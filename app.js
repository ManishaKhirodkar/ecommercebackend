const express = require('express');
const mongoose =require('mongoose');
const cors = require('cors');

const router = require('./Router/index');

const port = 4578;
const hostname = 'localhost';

const serverDB ="mongodb+srv://Manisha:YKJp4ksV1EaI3apa@cluster0.0htzs.mongodb.net/Shop_clone?retryWrites=true&w=majority";
  
const app = express();

app.use(cors());
app.use(express.json()); //parse the data in json format
app.use('/' , router);

mongoose
  .connect(serverDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    app.listen(port, hostname, () => {
      console.log(`Server is running at ${hostname}: ${port}`);
    });
  })
  .catch((err) => console.log(err));