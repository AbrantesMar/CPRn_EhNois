const async = require('asyncawait/async')
const await = require('asyncawait/await')
const EventModel = require('../models/EventModel').EventModel

const getEvents = async(() => {
    return new Promise((resolve, reject) => {
        let allEvents = await(EventModel.find())
        if(allEvents.length > 0){
            resolve(allEvents)
        } else { reject(new Error()) }
    })
})

const findById = async((eventId) => {
    return new Promise((resolve, reject) => { 
        let eventRequested = await(EventModel.findById(eventId))
        if(eventRequested.length > 0){
            resolve(eventRequested)
        } else { reject(new Error()) }
    })
})

const postEvent = async((event) => {
    return new Promise((resolve, reject) => { 
        EventModel.save((err) => {
            if(!err){
                resolve(EventModel)
            } else {
                reject(err)
            }
        })
    });
});

const putEvent = async((event) => {
    return new Promise((resolve, reject) => { 
        EventModel.findByIdAndUpdate(event.id, (err, event) => {
            // event fields here

            event.save((err) => {
                if(!err){
                    resolve(event)
                } else {
                    reject(err)
                }
            })
        })
    });
});

const deleteEvent = async((eventId) => { 
    return new Promise((resolve, reject) => { 
        EventModel.findById(eventId, (err, event) => {
            event.remove((err) => {
                if(!err){
                    resolve(true)
                } else {
                    reject(false)
                }
            })
        })
    });
});

module.exports = {
    getEvents: getEvents,
    findById: findById,
    postEvent: postEvent,
    putEvent: putEvent,
    deleteEvent: deleteEvent
}