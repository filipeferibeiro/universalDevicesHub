require('dotenv').config();
import knex from 'knex';

const DB_HOST = process.env['DB_HOST'];
const DB_PORT: number | undefined = parseInt(process.env['DB_PORT'] || "");
const DB_USER = process.env['DB_USER'];
const DB_PASSWORD = process.env['DB_PASSWORD'];
const DATABASE = process.env['DATABASE'];

const connection = knex({
    client: 'mysql2',
    version: '5.7',
    connection: {
        host : DB_HOST,
        port : DB_PORT,
        user : DB_USER,
        password : DB_PASSWORD,
        database : DATABASE
    },
    useNullAsDefault: true
});

export default connection;