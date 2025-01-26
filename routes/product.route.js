import express from 'express';
import Product from '../models/product.model.js';
import mongoose from 'mongoose';
import { getProduct, postProduct, deleteProduct, putProduct} from '../controllers/product.controller.js';

const router = express.Router();

router.post('/', postProduct);

router.delete('/:id', deleteProduct);

router.get('/', getProduct);

router.put('/:id', putProduct);


export default router;