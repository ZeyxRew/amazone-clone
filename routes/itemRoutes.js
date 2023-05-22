const express = require("express");

const itemController = require("../controllers/itemController");

const router = express.Router();

router.get("/:id", itemController.item_index);


module.exports = router;