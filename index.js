// This the entry point of the module.
// You could declare all your function there, but by convention and for good practices
// you should only store functions in the './lib' folder and expose them here

module.exports = function(sails) {

        const install = require('./install');
        const myAwesomeFunction = require('./lib/myAwesomeFunction');
        const iLoveGladys = require('./lib/iLoveGladys');
        const getAGladysParam = require('./lib/getAGladysParam');
        const dbCalls = require('./lib/retrieveFromDb');

    return {
        install : install,
        myAwesomeFunction : myAwesomeFunction,
        iLoveGladys : iLoveGladys,
        // shortand ES6 declaration
        getAGladysParam,
        dbCalls
    }
};