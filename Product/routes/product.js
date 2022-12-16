var express = require('express');
const product = require('../controllers/product');
var router = express.Router();

router.route('/:id')
.get(product.getMappedProductsAgainstEmployee)

router.route('/')
.get(product.getAllRecords)

module.exports=router;