// Use a param defined in 'parameters

const Promise = require('bluebird');

// Using arrow functions. Check ES6 specs for more informations
module.exports = () => {

    // uncomment following line ;)
    console.log('You have to put a valid parameterName in /lib/getGladysParam.js');
    const myParameterName = 'PARAM';
    const myParameterPromise = gladys.param.getValue(myParameterName);

    // As gladys convention is to generate Promises... gladys.param.getValue returns a Promise. You have to resolve it.
    // We don't deal with reject here because gladys.param.getValue already does it.
    return Promise.resolve(myParameterPromise.then((result) => 'The parameter value is ' + result));

    // Yeah it's stupid to make a new Promise from a resolved one.
    // Just for the sake of the example...
}