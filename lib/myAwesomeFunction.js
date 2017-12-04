// This is the first function for the module
// Your code should lie here
const Promise = require('bluebird');

module.exports = function myFirstFunction() {
  return new Promise(function (resolve, reject) {

    // async work here
    const valueToReturn = 42;

    resolve(valueToReturn);

    // if something fails, reject(new Error('bad bad'));
  })
};