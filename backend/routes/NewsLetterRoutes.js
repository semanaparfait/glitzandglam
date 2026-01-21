import express from 'express';
import { subscribeNewsletter,getNewsletterSubscribers } from '../controllers/NewsLetterControllers.js';
const router = express.Router();

router.post('/subscribeNewsletter', subscribeNewsletter);
router.get('/getNewsletterSubscribers', getNewsletterSubscribers);
export default router;