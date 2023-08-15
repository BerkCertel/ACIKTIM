
const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();


router.use("/kullanici/:username", function (req, res) {
    res.render("users/user-profile");
});

router.use("/kullanici-kayit", function (req, res) {
    res.render("users/user-registration");
});

router.use("/kullanici-giris", function (req, res) {
    res.render("users/user-login");
});

router.use("/sepet", function (req, res) {
    res.render("users/shopping-card");
});

router.use("/menu/:menuid", function (req, res) {
    res.render("users/menu-details");
});

router.use("/menu", function (req, res) {
    res.render("users/menu");
});

router.use("/404-error", function (req, res) {
    res.render("users/404-error");
});

router.use("/", function (req, res) {
    res.render("users/index");
});


module.exports = router;