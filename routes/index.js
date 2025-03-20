const express = require("express");
const router = express.Router();
const posts = require("../controllers/messageController")

router.get("/", posts.getAllMessages);
router.get("/new", (req, res)=> {
    res.status(200).render("form");
});
router.post("/new", posts.postMessage);

module.exports = router;