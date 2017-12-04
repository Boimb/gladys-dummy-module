// If you want to make a "compatibility" module, it has to implement an exec func.
// Then all the deviceTypes from device having the slug of your module has "service" option will be handled with this func
// Called this way: gladys.deviceType.exec({devicetype: id, value: 42})

module.exports = (param) => {

  // param is the deviceState created for the deviceType with the value
  // ******* Object look like this *******
  // { deviceType:
  //      RowDataPacket {
  //      id: 3,
  //      type: 'defineOne',
  //      unit: '°',
  //      min: 0,
  //      max: 99,
  //      identifier: 'colons:can:be:great:for:parsing',
  //      device: 147,
  //      service: 'dummy',
  //      protocol: 'dummyprotocol',
  //      deviceTypeIdentifier: 'colons:too',
  //      roomName: null },
  //      state: { devicetype: 3, value: 6 }
  // }
  // **************************************

  // Put some logic here if you want, or do nothing
  param.state.value = 42;

  //return false to cancel deviceState persist

}