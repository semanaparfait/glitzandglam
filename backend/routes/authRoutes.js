import express from 'express';
import { register,login,logout,me } from '../controllers/authControllers.js';
const router = express.Router();

router.post('/register',register)
router.post('/login',login)
router.get('/me',me)
router.post('/logout',logout)
export default router;