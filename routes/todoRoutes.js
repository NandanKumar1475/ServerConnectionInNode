import express from 'express'
import {createUser} from '../controlers/todoControllers.js';
import { getUser,getUserbyId } from '../controlers/getTodoControllers.js';
import {updateTodo} from '../controlers/updateTodControllers.js';
import {deleteuser} from '../controlers/deleteTodoController.js'
const router = express.Router();


router.post('/User',createUser);
router.get('/getuser',getUser);
router.get('/getuser/:id',getUserbyId);
router.put('/updateuser/:id',updateTodo);
router.delete('/deleteuser/:id',deleteuser)

export default router;

