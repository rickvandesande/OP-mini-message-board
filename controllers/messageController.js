const messages = require("../db/queries");

async function getAllMessages(req, res) {
    const posts = await messages.getMessages();
    res.render("index", {posts});
} 
async function postMessage(req, res) {
    const message = req.body.message;
    const name = req.body.name;
    await messages.postMessage(message, name);
    console.log("post succesfully added");
    res.redirect("/");
}

module.exports = {
    getAllMessages,
    postMessage
};