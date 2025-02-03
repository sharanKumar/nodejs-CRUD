const request = require('supertest');
const app = require('../app');
const { describe, it, expect } = require('@jest/globals');

describe('User API', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/users/register')
      .send({
        userName: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password123'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message', 'User registered successfully');
  });

  it('should login a user', async () => {
    const res = await request(app)
      .post('/api/users/login')
      .send({
        userName: 'john.doe@example.com',
        password: 'password123'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('token');
  });
});