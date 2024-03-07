import express from 'express'
import {createUser} from '../controlers/todoControllers.js';
const router = express.Router();


router.post('/User',createUser);

export default router;

