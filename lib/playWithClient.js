const shared = require('./shared')

// You can know rely on a unique instance of your client ;)
module.exports = function () {
  return shared.getClient()
    .then(client => client.getDevicesStatus())
}