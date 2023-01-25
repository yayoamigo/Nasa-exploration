
const http = require('http');
const mongoose = require('mongoose');

require('dotenv').config();

const app = require('./app');
const { mongoConnect } = require('./services/mongo');
const{ loadPlanetsData } = require('./models/planets.model')
const { loadLaunchData }=  require('./models/launches.model');

const PORT = process.env.PORT || 7000;



const server = http.createServer(app);

mongoose.connection.once('open', ()=>{
    console.log('Mongo conncection ready');
})

mongoose.connection.on('error', (err)=>{
    console.error(err);
})
async function startServer(){
    await mongoConnect()
    await loadPlanetsData();
    await loadLaunchData();

    server.listen(PORT, () => {
        console.log(`listening on port ${PORT}`)
    })
}


startServer()