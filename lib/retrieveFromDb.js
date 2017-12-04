// You can get data from DB inside your module \o/

// Import your queries.
// It's best practice to store your queries in separate file
const queries = require('./queries');

// Export a simple object containing db calls functions.
module.exports = {

  // NOTE: gladys API is 100% promise based.
  // No need to generate promise here, gladys.utils.sql already returns a Promise object ;) <3 Gladys

  // A DB request without parameter
  getAllUsers: () => gladys.utils.sql(queries.getAllUsers, []),

  // Passing a parameter
  getUserById: (id) => gladys.utils.sql(queries.getUserById, [id]),

  getUserIdentityById: (id) => gladys.utils.sql(queries.getUserIdentityById, [id])

}