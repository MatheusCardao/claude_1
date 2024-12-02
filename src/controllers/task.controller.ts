import { Request, Response } from 'express';
import { Task, TaskStatus } from '../models/task.model';

export class TaskController {
  async createTask(req: Request, res: Response) {
    const { title, status } = req.body;
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      createdAt: new Date(),
      status
    };
    // Salva a nova tarefa no banco de dados (não implementado aqui)
    res.status(201).json(newTask);
  }

  async getTasks(req: Request, res: Response) {
    const tasks = await Task.find(); // Busca tarefas do banco de dados
    res.status(200).json(tasks);
  }

  async updateTask(req: Request, res: Response) {
    const { id } = req.params;
    const { title, completed } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, completed },
      { new: true }
    );
    res.status(200).json(updatedTask);
  }

  async deleteTask(req: Request, res: Response) {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.status(204).end();
  }
}