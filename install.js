const Promise = require('bluebird');

module.exports = function install() {

    return new Promise(function(resolve, reject) {
        // async work here
        const valueToReturn = console.log('This will appear just one time...');

        resolve(valueToReturn);

        // if something fails, reject(new Error('bad bad'));
    })

};