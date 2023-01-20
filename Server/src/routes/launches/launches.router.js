const express = require('express');

const {httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch} = require('./launches.controller')

const launchesRouter = express.Router();


launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunch);
launchesRouter.delete('/:id', (req, res) => {
    console.log("abort launch route received")
    httpAbortLaunch(req, res)
});

module.exports = launchesRouter