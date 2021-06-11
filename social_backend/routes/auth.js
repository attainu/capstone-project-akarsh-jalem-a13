const router = require("express").Router();
const User = require("../models/User");

//REGISTER
router.get("/register", async (req, res) => {
    res.send("It is auth register route page");
});

//LOGIN
router.get("/login", async (req, res) => {
    res.send("It is auth user login route page")
});

module.exports = router;