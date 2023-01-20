const launchis = require('./launches.mongo')
const planetas = require('./planets.mongo')

const DEFAULT_FLIGHT_NUMBER = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
}

saveLaunch(launch)

async function launchExist(launchId){
    return await launchis.findOne({
        flightNumber: launchId
    })
}

async function getLatesFligh(){
    const latestLaunch = await launchis.findOne().sort('-flightNumber');
    if(!latestLaunch){
        return DEFAULT_FLIGHT_NUMBER
    }
    return latestLaunch.flightNumber
}

async function getAllLaunches(){
    return await launchis.find({}, {
        '_id':0,'__v':0
    })
}

async function saveLaunch(launch){
    const planet = await planetas.findOne({
        keplerName: launch.target,
    })
    if(!planet){
        throw new Error('No matching planet was found')
    }
    await launchis.findOneAndUpdate({
        flightNumber: launch.flightNumber,
    }, launch, {
        upsert: true
    })
}

async function scheduleLaunch(launch){
    const newflightNumber = await getLatesFligh() + 1
    const newLaunch = Object.assign(launch,
        {
        customer: ['Nasa'],
        upcoming: true,
        success: true,
        flightNumber:newflightNumber
        })
    await saveLaunch(newLaunch)
}

async function abortedLaunches(launchId){
   const aborted =  await launchis.updateOne({
        flightNumber: launchId,
    }, {
        upcoming: false,
        success: false,
    })
    return aborted.modifiedCount === 1;
}

module.exports = {
    launchExist,
    getAllLaunches,
    scheduleLaunch,
    abortedLaunches
};