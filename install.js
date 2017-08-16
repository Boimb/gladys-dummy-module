const Promise = require('bluebird');

module.exports = function install() {

    return new Promise(function(resolve, reject) {
        // async work here
        const valueToReturn = console.log('myModule is being installed');

        resolve(valueToReturn);

        // if something fails, reject(new Error('bad bad'));
    })

};