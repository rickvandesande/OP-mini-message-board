const pool = require('./pool');

async function getMessages() {
    const {rows} = await pool.query("SELECT * FROM messages");
    return {rows};
}

async function postMessage(message, name) {
    await pool.query("INSERT INTO messages (text, username, added) VALUES ($1, $2, NOW())", [message, name]);
}

module.exports = {
    getMessages,
    postMessage
}