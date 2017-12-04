// Define here all the db queries you need.
// Uou can separate theme into multiple files to organize your code
// foo.queries.js, bar.queries.js

// Export a plain js object containing your SQL queries
module.exports = {
  // Get all rows of a table
  getAllUsers: `SELECT *
    FROM user;`,

  // Pass a filter criteria
  getUserById: `SELECT *
    FROM user
    WHERE id = ?;`,

  // Select only a few columns / use of MYSQL functions
  getUserIdentityById: `SELECT firstname, lastname,
      DATE_FORMAT(birthdate, '%Y-%m-%d') AS birthdate,
      CASE WHEN gender = 0 THEN 'man' WHEN gender = 1 THEN 'woman' END AS gender
    FROM user
    where id = ?;`,

  // Why are there backticks(this symbol : ` ) instead of simple/double quotes (' ") surrounding strings ?
  // It's an ES6 feature : Template Strings.
  // You can now write multiple lines strings (and other things... Check doc).
  // Really nice for SQL statements ;)

  // getFirstHouse
  getLastPosition: `SELECT latitude, longitude 
    FROM LOCATION
    WHERE user = ?
    ORDER BY createdAt DESC
    LIMIT 1;`
}