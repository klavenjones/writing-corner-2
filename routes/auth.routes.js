const express = require("express");
const router = require("express-promise-router")();
const AuthController = require("../controllers/auth.controllers");

const middleware = require("../middleware");

/*
 * POST
 */
router.post("/register", AuthController.signUp);
router.post("/login", AuthController.signIn);
router.get("/logout", AuthController.signOut);
router.get("/status", middleware.passportJWT, AuthController.checkAuth);

module.exports = router;
