/**
 * A simple example to show how to manage a single instance of an object (or service or whatever...)
 * Implicite convention is to call it client, as mainly, it's a client to interact with devices in Gladys
 * You may want to manage your npm dependancies like this.
 *
 * const lightLibClient = require('light-lib-client')
 */

// initialize to null
const client = null;
// fake client... Don't get disturbed :D
function fakeClient () {
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

module.exports = {

  // Get the client
  getClient: () => {
      // return client if already set
      if (client !== null) {
        // you won't create another instance of client.
        return Promise.resolve(client)
      } else {
        // Doesn't exist, create it!
        return Promise.resolve(new fakeClient())
      }
    },

    // maybe you want to reset client's instance
    reset: () => {
      client = null;
      return Promise.resolve(client)
    }
}
