const express = require("express");
const router = express.Router();
const {
  getAllItems,
  addItem,
  editItem,
  deleteItem,
} = require("../controllers/inventoryController.js").default;

router.get("/", getAllItems);
router.post("/", addItem);
router.put("/:id", editItem);
router.delete("/:id", deleteItem);

module.exports = router;
