const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');
const{ loadPlanetsData } = require('./models/planets.model')

const PORT = process.env.PORT || 7000;

const mongoURL = 'mongodb+srv://yayoamigosoy:Floria0991@nasacluster.z0s3sd3.mongodb.net/planetsdb?retryWrites=true&w=majority'

const server = http.createServer(app);

mongoose.connection.once('open', ()=>{
    console.log('Mongo conncection ready!');
})

mongoose.connection.on('error', (err)=>{
    console.error(err);
})
async function startServer(){
    await mongoose.connect(mongoURL);
    console.log(mongoose.connection.readyState)
    await loadPlanetsData();

    server.listen(PORT, () => {
        console.log(`listening on port ${PORT}`)
    })
}


startServer()