

'use strict';

const Keys = require("./keys").Keys;

const exceptions = require('../messages/exceptions');

const OK = 200;
const CREATED = 201;
const NO_CONTENT = 204;
const BAD_REQUEST = 400;
const NOT_FOUND = 404;
const ERROR = 500;
const NOT_IMPLEMENTED = 501;

class HttpCodes {

    constructor() {
    }

    static BadRequest(res, err, message = Keys.format("exceptions.http.badRequest")) {
        HttpCodes.DefaultError(res, BAD_REQUEST, err, message);
    }

    static Error(res, err, message = Keys.format("exceptions.http.error")) {
        HttpCodes.DefaultError(res, ERROR, err, message);
    }

    static DefaultError(res, code = ERROR, error, message = Keys.format("exceptions.http.error")) {
        let err;
        if (Array.isArray(error)) { //check if array, transforms to object.
            err = { 
                code: code, 
                message: error, 
                internalMessage: message ? message : Keys.format("exceptions.http.error") 
            };
        } else {
            let errorMessage = error ? (error.message?error.message:error) : Keys.format("exceptions.http.error");

            err = { 
                code: code, 
                message: errorMessage, 
                internalMessage: message 
            };
        }

        res.status(code).send( err );
    }

    static NoContent(res) {
        res.sendStatus(NO_CONTENT);
    }

    static NotFound(res, message = Keys.format("exceptions.http.notFound")) {
        let errorObject = { code: NOT_FOUND, message: { "message" : message } };
        res.status(NOT_FOUND).send( errorObject );
    }

    static Ok(res, object = {}) {
        res.status(OK).send( object );
    }

    static SuccessResponse(res, message = "Success") {
        res.status(OK).send( { code: OK, message: message } );
    }

    static ErrorResponse(res, message = "Error") {
        HttpCodes.DefaultError(res, ERROR, new Error(), message);
    }

    static Created(res, message) {
        if (Array.isArray(message)) { //check if array, transforms to object.
            message = { messages: message };
        }
        
        res.status(CREATED).send( { code: CREATED, message: message });
    }

    static NotImplemented(res) {
        res.status(NOT_IMPLEMENTED).send( { message : "Method not implemented.", code: NOT_IMPLEMENTED } );
    }

    //NÃO EXISTE UM PADRÃO | PADRONIZAR |
}

module.exports = {
    HttpCodes: HttpCodes
}
