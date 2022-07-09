const express = require("express")
const router = express.Router()
const { postController, getController } = require("./controllers")

router.route("/create").post(postController)
module.exports = router
