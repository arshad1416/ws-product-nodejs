require('dotenv').config()
const pgPromise = require('pg-promise');

const pgp = pgPromise({}); // Empty object means no additional config required

const config = {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD
};

const db = pgp(config);

exports.db = db;