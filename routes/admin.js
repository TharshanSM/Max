const express = require("express");
const router = express.Router();
const {
  redirectProductPage,
  addProduct,
} = require("../controller/productController");

router.get("/add-product", redirectProductPage);

router.post("/add-product", addProduct);

module.exports = router;
