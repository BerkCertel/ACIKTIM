
const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();

router.use("/kullanici/:username", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/users","user-profile.html"));
});

router.use("/kullanici-kayit", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/users","user-registration.html"));
});

router.use("/kullanici-giris", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/users","user-login.html"));
});

router.use("/sepet", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/users","shopping-card.html"));
});

router.use("/menu/:menuid", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/users","menu-details.html"));
});

router.use("/menu", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/users","menu.html"));
});

router.use("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/users","index.html"));
});


module.exports = router;