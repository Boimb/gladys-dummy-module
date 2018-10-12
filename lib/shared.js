/**
 * A simple example to show how to manage a single instance of an object (or service or whatever...)
 * Implicite convention is to call it client, as mainly, it's a client to interact with devices in Gladys
 *
 */

/**
 * fake light-lib-client... Don't get disturbed :D
 * In real life, this doesn't exist.
 * You'll replace with :
 * const lightLibClient = require('light-lib-client')
 * Where light-lib-client is the npm package you depend on.
 */
function lightLibClient () {
    this.getDevices = () => Promise.resolve([
      {
        name: 'device1',
        type: 'rgb',
        status: 'on'
      },
      {
        name: 'device2',
        type: 'white',
        status: 'off'
      }]);
    this.getDevicesStatus = () => this.getDevices()
      .then(devices => Promise.resolve(devices.map(device => device.status)));
}


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
        return Promise.resolve(new lightLibClient())
      }
    },

    // maybe you want to reset client's instance
    reset: () => {
      client = null;
      return Promise.resolve(client)
    }
}
