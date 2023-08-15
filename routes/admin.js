
const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();

router.use("/admin/user-profile-edit/:username", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/admin","user-profile-edit.html"));
});

router.use("/admin/user-registration-edit", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/admin","user-registration-edit.html"));
});

router.use("/admin/user-login-edit", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/admin","user-login-edit.html"));
});

router.use("admin/shopping-card-edit", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/admin","shopping-card-edit.html"));
});

router.use("/admin/menu-details-edit/:menuid", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/admin","menu-details-edit.html"));
});

router.use("/admin/menu-edit", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/admin","menu-edit.html"));
});

router.use("/admin/index-edit", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/admin","index-edit.html"));
});


module.exports = router;