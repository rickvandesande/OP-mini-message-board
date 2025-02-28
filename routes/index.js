const express = require("express");
const router = express.Router();

const messages = [
    {
        text: "Hi there",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World",
        user: "Charles",
        added: new Date()
    }
]

router.get("/", (req, res)=> {
    res.status(200).render("index", {messages});
});
router.get("/new", (req, res)=> {
    res.status(200).render("form");
});
router.post("/new", (req, res)=> {
    const message = req.body.message;
    const name = req.body.name;
    messages.push({text: message, user: name, added: new Date()});
    res.redirect("/");
})

module.exports = router;