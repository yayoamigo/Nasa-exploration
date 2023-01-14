const http = require('http');

const app = require('./app');
const{ loadPlanetsData } = require('./models/planets.model')

const PORT = process.env.PORT || 7000;

const server = http.createServer(app);

async function startServer(){
    await loadPlanetsData();

    server.listen(PORT, () => {
        console.log(`listening on port ${PORT}`)
    })
}

startServer()