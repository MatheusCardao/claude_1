import express, { Router } from 'express';
import { TaskController } from '../controllers/task.controller';

const router: Router = express.Router();
const taskController = new TaskController();

router.post('/', taskController.createTask);
router.get('/', taskController.getTasks);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

export default router;