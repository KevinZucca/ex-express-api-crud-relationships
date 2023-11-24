const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");
const validator = require("../middlewares/validator");
const idValidation = require("../validations/postsID");
const titleValidation = require("../validations/postsTitle");

router.get("/", postsController.index);
router.post("/", validator(titleValidation), postsController.create);
router.get("/:slug", validator(idValidation), postsController.show);
router.put("/:slug", validator(idValidation), postsController.update);
router.delete("/:slug", validator(idValidation), postsController.destroy);

module.exports = router;
