export enum TaskStatus {
    TODO = 'todo',
    IN_PROGRESS = 'in_progress',
    DONE = 'done',
  }
  
  export interface Task {
    id: string;
    title: string;
    completed: boolean;
    status: TaskStatus;
    createdAt: Date;
  }