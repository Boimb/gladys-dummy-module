// Some other code

const Promise = require('bluebird');

module.exports = function anotherFunction() {
  return new Promise(function (resolve, reject) {
    // async work here
    const log = sails.log.debug('this is debug');

    resolve(log);

    // if something fails
    reject(new Error("Why don't you love me :'("));
  })
};