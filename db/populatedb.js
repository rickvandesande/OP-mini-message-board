require('dotenv').config();
const {Client} = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text TEXT,
    username VARCHAR(255),
    added DATE
);

INSERT INTO messages (text, username, added)
VALUES 
    ('How you doing?', 'Joey', NOW()),
    ('The hills are alive with the sound... OF music!', 'Chandler', NOW());
`

async function main() {
    console.log('seeding...');
    const client = new Client({
        connectionString: `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}?sslmode=require`,
    });
    console.log(process.env.DATABASE_USER);
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();