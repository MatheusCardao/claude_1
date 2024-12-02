import mongoose, { Schema, Document } from 'mongoose';

export enum TaskStatus {
    TODO = 'todo',
    IN_PROGRESS = 'in_progress',
    DONE = 'done',
  }

  export interface TaskDocument extends Document {
    title: string;
    completed: boolean;
    status: TaskStatus;
    createdAt: Date;
  }
  
  export interface Task {
    id: string;
    title: string;
    completed: boolean;
    status: TaskStatus;
    createdAt: Date;
  }

  const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    status: { type: String, enum: Object.values(TaskStatus), default: TaskStatus.TODO },
    createdAt: { type: Date, default: Date.now },
  });
  
  export const Task = mongoose.model<TaskDocument>('Task', taskSchema);