const mongoose = require('mongoose')
const Schema = mongoose.Schema
const CommonModel = require("./CommonModel")

const CategorySchema = new Schema({
    title: String,
    description: String
}, {collection: "category"});

const EventSchema = new Schema({
    title: String,
    description: String,
    category: CategorySchema,
    
    beginDate: { type: Date, default: new Date },
    endDate: { type: Date, default: new Date },
    createdBy: CommonModel.PersonSchema,
    created: { type: Date, default: new Date },  //timestamp for creation    
    updatedBy: CommonModel.PersonSchema, //userCode that created/updated record
    updated: { type: Date, default: new Date },  //timestamp for creation or update

    location: {
        placeName: String,
        address: CommonModel.AddressSchema
    }
}, {collection: 'events'})

let EventModel = mongoose.model('events', EventSchema)
let CategoryModel = mongoose.model('categories', CategorySchema)

module.exports = {
    EventModel: EventModel
};
