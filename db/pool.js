const {Pool} = require('pg');

module.exports = new Pool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    ssl: require,
    port: 5432 // The default port
});