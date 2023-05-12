const express=require('express');
const { createProduct, getAllProduct, getSingleProduct, updateProduct } = require('../controllers/productController');

const router=express.Router();

router.post('/product',createProduct)

router.get('/getproduct',getAllProduct)

router.get('/getproduct/:id',getSingleProduct)

router.put('/productupdate/:id',updateProduct)

module.exports=router