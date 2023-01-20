const {getAllLaunches, scheduleLaunch, launchExist, abortedLaunches} = require('../../models/launches.model')

async function httpGetAllLaunches(req,res){
    return res.status(200).json( await getAllLaunches())
}

async function httpAddNewLaunch(req,res) {
    const launch = req.body;

    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target){
        return res.status(400).json({
            error: 'Missing required property'
        })
    }
    launch.launchDate = new Date(launch.launchDate)
    if (isNaN(launch.launchDate)){
        return res.status(400).json({
            error: 'invalid date'
        })
    }

    await scheduleLaunch(launch)
    return res.status(201).json(launch)
}



async function httpAbortLaunch(req,res){
const launchId = Number(req.params.id)
const existLaunch = await launchExist(launchId)
if(!existLaunch){
    return res.status(400).json({
        error:'Launch not found'
    })
} 
const aborted = await abortedLaunches(launchId);
if(!aborted){
    return res.status(400).json({
        error: 'Launch not aborted'
    })
}
return res.status(200).json(({ok: true,})) 

}


module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch
}