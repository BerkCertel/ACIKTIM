
const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();

router.use("/user-profile-edit/:username", function (req, res) {
    res.render("admin/user-profile-edit");
});

router.use("/user-registration-edit", function (req, res) {
    res.render("admin/user-registration-edit");
});

router.use("/user-login-edit", function (req, res) {
    res.render("admin/user-login-edit");
});

router.use("/shopping-card-edit", function (req, res) {
    res.render("admin/shopping-card-edit");
});

router.use("/menu-details-edit/:menuid", function (req, res) {
    res.render("admin/menu-details-edit");
});


router.use("/menu-edit", function (req, res) {
    res.render("admin/menu-edit");
});


router.use("/index-edit", function (req, res) {
    res.render("admin/index-edit");
});



module.exports = router;