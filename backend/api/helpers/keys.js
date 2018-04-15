'use strict';

// Exception messages
const exceptions = require('../messages/exceptions');

const FlatMap = require('./flatMap');

const winston = require('winston');

const configLog = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    verbose: 3,
    debug: 4,
    silly: 5
  },
  colors: {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    verbose: 'cyan',
    debug: 'blue',
    silly: 'magenta'
  }
};

const keysLogger = new (winston.Logger)({
  transports: [
    new (winston.transports.File) ({
      filename: './keys-not-mapped.log',
      maxFiles: 5, /* número de arquivos criados*/
      maxsize: 10000000, /* 10MB em Bytes*/
      tailable: true
    })
  ],
  levels: configLog.levels,
  colors: configLog.colors
});

const flatExceptions = FlatMap.flatten(exceptions);

class Keys {

    constructor() {
    }


    static format(value, ...params) {
        let key = "";

        if (value) {
            if (typeof(value) === "string") {
                try {
                    key = flatExceptions[value];

                    if (!key) {
                        key = value;
                        keysLogger.warn(`Key not found: [${value}]`);
                    }

                } catch (err) {
                    key = value; //uses same values
                    keysLogger.warn(`Key not found: [${value}]`);
                }

                if (key && params) {
                    key = stringFormat(key, ...params);
                }

            } else {
                key = `Key is not string. [${value}]`;
            }
        }

        return key;
    }
}

function stringFormat(value, ...params) {
    var s = value,
        i = params.length;

    while (i--) {
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), params[i]);
    }
    return s;
};

module.exports = {
    Keys: Keys
}