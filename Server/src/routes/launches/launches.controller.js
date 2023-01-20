const {getAllLaunches, addNewLauch, launchExist, abortedLaunches} = require('../../models/launches.model')

function httpGetAllLaunches(req,res){
    return res.status(200).json(Array.from(getAllLaunches()))
}

function httpAddNewLaunch(req,res) {
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

    addNewLauch(launch)
    return res.status(201).json(launch)
}



function httpAbortLaunch(req,res){
const launchId = Number(req.params.id)
if(!launchExist(launchId)){
    return res.status(400).json({
        error:'Launch not found'
    })
} 
const aborted = abortedLaunches(launchId);
return res.status(200).json(aborted) 

}


module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch
}