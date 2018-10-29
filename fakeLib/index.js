/**
 * fake light-lib-client... Don't get disturbed :D
 * In real life, this will be a package.
 */
module.exports = function LightLibClient () {
  // Fake an authentication method
  this.authenticate = (credentials) => {
    if (credentials) {
      //just a fake method. Don't care about credentials validity
      this._authenticated = true;
      return Promise.resolve('yeah! Got in touch ;)')
    } else {
      this._authenticated =  false;
      return Promise.reject('Need Credentials to authenticate ;)')
    }
  };

  this.getDevices = () =>  this._authenticated
    ? Promise.resolve([
      {
        name: 'device1',
        type: 'rgb',
        status: 'on'
      },
      {
        name: 'device2',
        type: 'white',
        status: 'off'
      }])
    : Promise.reject('Need authentication')

  this.getDevicesStatus = () => this.getDevices()
    .then(devices => Promise.resolve(devices.map(device => device.status)));
}