const express = require('express');
const router = express.Router();
const productsControllerV2 = require('../../controller/v2/productsControllerV2');

router.get('/', productsControllerV2.getAll);
router.post('/add-product', productsControllerV2.insertOne);
router.put('/update-product', productsControllerV2.updateOne);
router.delete('/delete-product/:id', productsControllerV2.deleteOne);

module.exports = router;