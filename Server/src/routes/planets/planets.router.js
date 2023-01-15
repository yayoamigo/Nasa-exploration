const express = require('express');
const {
    httpGetAllPlanets, httpAddNewLaunch
} = require('./planets.controller');


const planetsRouter = express.Router();

planetsRouter.get('/', httpGetAllPlanets);

module.exports = planetsRouter;