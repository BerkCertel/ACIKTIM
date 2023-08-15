
const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();

router.use("/kullanici/:kullaniciadi", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/users","kullanici-girisli-sayfa.html"));
});

router.use("/kullanici-kayit", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/users","kullanici-kayit.html"));
});

router.use("/kullanici-giris", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/users","kullanici-giris.html"));
});

router.use("/sepet", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/users","sepet.html"));
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