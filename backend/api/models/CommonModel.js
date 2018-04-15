
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PersonSchema = new Schema({
    personId: String,
    personName: String
});

const TelephoneSchema = new Schema({
    areaCode: String,
    telephoneNumber: String,
});

const AddressSchema = new Schema({
    street:	String, //example: Rua Alvares da Cunha, 2034
    complement:	String, //example: Ex: apto 104 bloco D
    city: String, //example: Sao Paulo
    state: String, //example: SP
    neighborhood: String,
    zipcode: String, //XXXXX-XXX
    number:	String,
    country: String
});

module.exports = {
    AddressSchema: AddressSchema, 
    TelephoneSchema: TelephoneSchema, 
    PersonSchema: PersonSchema
};
