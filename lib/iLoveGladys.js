// Some other code

const Promise = require('bluebird');

module.exports = function iLoveGladys() {
    return new Promise(function(resolve, reject) {
        // async work here
        const soMuchLove = console.log('<3 Gladys <3');

        resolve(soMuchLove);

        // if something fails
        reject(new Error("Why don't you love me :'("));
    })
};