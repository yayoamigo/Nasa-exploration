const launches = new Map();

let latestFlightNumber = 100;

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

launches.set(launch.flightNumber, launch)

function launchExist(launchId){
    return launches.has(launchId);
}

function getAllLaunches(){
    return Array.from(launches.values())
}

function addNewLauch(launch){
    latestFlightNumber++;
    launches.set(latestFlightNumber, Object.assign(launch,
        {
        customer: ['Nasa'],
        upcoming: true,
        success: true,
        flightNumber:latestFlightNumber
        }))
}

function abortedLaunches(launchId){
    const aborted = launches.get(launchId)
    aborted.success = false;
    aborted.upcoming = false;
    return aborted;
}

module.exports = {
    launchExist,
    getAllLaunches,
    addNewLauch,
    abortedLaunches
};