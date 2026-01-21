import express from 'express';
import { submitContactForm,getContactSubmissions } from '../controllers/ContactUsController.js';
const router = express.Router();

router.post('/submitContactUs', submitContactForm);
router.get('/getContactedUs', getContactSubmissions);
export default router;