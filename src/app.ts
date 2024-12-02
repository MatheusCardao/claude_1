import express, { Application } from 'express';
import taskRoutes from './routes/task.routes';

const app: Application = express();

app.use(express.json());
app.use('/api/tasks', taskRoutes);

export default app;