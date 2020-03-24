var express = require("express");
var router = require("express-promise-router")();
var AuthController = require("../controllers/auth.controllers");

/*
 * POST
 */
router.post("/register", AuthController.signUp);
router.post("/login", AuthController.signIn);
router.post("/logout", AuthController.signOut);

module.exports = router;
