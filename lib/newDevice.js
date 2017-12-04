module.exports = () => {

  const myNewDevice = {
    identifier : 'colons:can:be:great:for:parsing',
    name: 'dummyDevice',
    protocol: 'dummyprotocol',
    service: 'dummy'
  };
  // You can add deviceTypes now or later
  const types = [{
      identifier: 'colons:too',
      name: 'dummyDeviceType',
      type: 'defineOne',
      category: 'none',
      unit:'°',
      tag: 'tagIt',
      sensor: true,
      min: 0,
      max: 99,
    }];
    return gladys.device.create({device: myNewDevice, types: types});



}