var express = require("express");
var router = require("express-promise-router")();
var UserController = require("../controllers/user.controllers.js");

/*
 * GET
 */
router.get("/", UserController.list);

/*
 * GET
 */
router.get("/:id", UserController.show);

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
