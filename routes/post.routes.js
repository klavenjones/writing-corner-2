const express = require("express");
const router = require("express-promise-router")();
const PostController = require("../controllers/post.controllers");
const middleware = require("../middleware");

/*
 * GET
 */
router.get("/", PostController.list);

/*
 * GET
 */
router.get("/:id", PostController.show);

/*
 * POST
 */
router.post("/", middleware.passportJWT, PostController.create);

/*
 * PUT
 */
router.put("/:id", PostController.update);

/*
 * DELETE
 */
router.delete("/:id", PostController.remove);

module.exports = router;
