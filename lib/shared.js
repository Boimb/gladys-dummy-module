/**
 * A simple example to show how to manage a single instance of an object (or service or whatever...)
 * Implicite convention is to call it client, as mainly, it's a client to interact with devices in Gladys
 *
 * Most of the time, clients are objects or functions designed to "observe" your devices.
 * They do the heavy lifting to track your device(s) status/properties.
 *
 * Some do real time job, some need you to make queries. Stick to the doc.
 *
 * Here, we deal with a fake LightLibClient created in /fakeLib
 *
 */

const LightLibClient = require('../fakeLib/index')

// initialize to null
let client = null;

module.exports = {
  // Get the client
  getClient: () => {
      // return client if already set
      if (client !== null) {
        // you won't create another instance of client.
        return Promise.resolve(client)
      } else {
        // Doesn't exist, create it!
        return Promise.resolve(new LightLibClient())
      }
    },

    // maybe you want to reset client's instance
    reset: () => {
      client = null;
      return Promise.resolve(client)
    }
}
