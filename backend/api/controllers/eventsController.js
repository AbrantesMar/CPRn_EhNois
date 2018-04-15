const HttpCodes = require("../helpers/httpcodes").HttpCodes
const eventServices = require("../services/eventsServices")
const exceptions = require('../messages/exceptions')
const Keys = require('../helpers/keys').Keys
const async = require('asyncawait/async')
const await = require('asyncawait/await')
const EventModel = require('../models/EventModel').EventModel


function getEvents(req, res){
    getEventsAsync(req, res)
}

const getEventsAsync = async((req, res) => {
    let events = await(eventServices.getEvents())

    if(events){
        return HttpCodes.Ok(res, events)
    } 
    return HttpCodes.Error(res, null, Keys.format(exceptions.events.error))
})

function getEventById(req, res){
    getEventByIdAsync(req, res)
}

const getEventByIdAsync = async((req, res) => { 
    let requestId = req.swagger.params.eventId.value
    let eventRequested = await(eventServices.findById(requestId))
    if(eventRequested){
        return HttpCodes.Ok(res, eventRequested)
    }
    return HttpCodes.BadRequest(res, null, Keys.format(exceptions.events.eventNotFound))
})

function updateEventData(req, res){
    updateEventDataAsync(req, res)
}

const updateEventDataAsync = async((req, res) => {
    let eventModel = new EventModel({
        //
    })
    let updateRequest = await(eventServices.putEvent(eventModel))
    if(updateRequest){
        return HttpCodes.Ok(res, eventModel)
    }
    return HttpCodes.BadRequest(res, null, Keys.format(exceptions.http.error))
})



module.exports = {
    getEvents: getEvents,
    updateEventData: updateEventData
}