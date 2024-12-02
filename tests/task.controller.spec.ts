import request from 'supertest';
import app from '../app';

describe('TaskController', () => {
  it('should create a new task', async () => {
    const response = await request(app)
      .post('/api/tasks')
      .send({ title: 'Test Task' });
    expect(response.status).toBe(201);
    expect(response.body.title).toBe('Test Task');
  });

  it('should retrieve all tasks', async () => {
    const response = await request(app).get('/api/tasks');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  // Add more tests for update and delete operations
});