const express = require('express');
const router = express.Router();
const productsControllerV1 = require('../../controller/v1/productsControllerV1');

router.get("/", productsControllerV1.getAll);
router.post("/add-product/", productsControllerV1.insertOne);
router.put("/update-product/", productsControllerV1.updateOne);
router.delete("/delete-product/", productsControllerV1.deleteOne);

module.exports = router;