const express = require("express");
const router = require("express-promise-router")();
const passport = require("passport");
const UserController = require("../controllers/user.controllers.js");
const middleware = require("../middleware");

/*
 * GET
 */
router.get("/", UserController.list);

/*
 * GET
 */
router.get("/user", middleware.passportJWT, UserController.show);

/*
 * POST
 */
router.post("/", UserController.create);

/*
 * PUT
 */
router.put("/:id", UserController.update);

/*
 * DELETE
 */
router.delete("/:id", UserController.remove);

module.exports = router;
