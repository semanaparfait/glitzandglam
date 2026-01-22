import express from 'express';
import {createCategory, getCategoryById,deleteCategory,getCategories} from '../controllers/categoryController.js'
const router = express.Router();

router.post('/createCategory', createCategory)
router.get('/getCategories', getCategories)
router.get('/getCategories/:id',getCategoryById )
router.delete('/deleteCategory/:id', deleteCategory)

export default router;