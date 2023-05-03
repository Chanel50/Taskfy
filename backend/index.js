const express = require('express');
const dotenv = require('dotenv');

//Configure dotenv files above using any other library and files
dotenv.config({path:'./config/config.env'}); 

require('./config/conn');

//Creating an app from express
const app = express();

const tacheRouter = require('./routes/tache'); // rename tacheRoute to tacheRouter

//Using express.json to get request of json data
app.use(express.json());

//Using tache routes
app.use('/tache', tacheRouter); // use tacheRouter instead of tacheRoute

//listening to the server
app.listen(process.env.PORT, () => {
    console.log(`Server is listening at ${process.env.PORT}`);
});

