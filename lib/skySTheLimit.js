// A more complicated example :
// Get Info from Gadys and query an external API based on results obtained
// Wait for api call to be resolved to call a new Gladys function
// NOW, you're ok with promises ;)


const Promise = require('bluebird');
const queries = require('./queries');

module.exports = function lookAtTheSky() {

  // get last position ... Don't forget, it's a promise
  const coordsPromise = gladys.utils.sql(queries.getLastPosition, [1])

  // resolve the coordsPromise then get a new promise from the api call
  const issPromise = coordsPromise.then(
    resolvedPromise => gladys.utils.request(`http://api.open-notify.org/iss-pass.json?lat=${resolvedPromise[0].latitude.toString()}&lon=${resolvedPromise[0].longitude.toString()}`)
  )

  // Getting user ... also a promise
  const userPromise = gladys.utils.sqlUnique(queries.getUserById, [1])

  // Wait coords and user promises to be resolved to access the data and create the alarm
  // We return this cause gladys.alarm.create returns ofc ... a Promise ;)
  return Promise.all([issPromise, userPromise]).then(
    // Create alarm for the next ISS visit ;)
    resolvedPromises => {

      console.log('creating alarm...')

      gladys.alarm.create({
        name: "iss next visit",
        // Get time of the next visit
        datetime: new Date(resolvedPromises[0].response[0].risetime * 1000),
        // Get user object
        user: resolvedPromises[1]

      })
    }
  )

};
