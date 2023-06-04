const request = require('supertest');
const app = require('../index');

describe('Test the add_student route', () => {
//  test('It should respond with a status code 302 for successful student creation', async () => {
//   const response = await request(app)
//     .post('/add_student')
//     .send({
//       name: 'John Doe',
//       exam1: 90,
//       exam2: 85,
//       exam3: 95,
//     });
//   expect(response.statusCode).toBe(302);
//   expect(response.header['location']).toBe('/');
// });

  test('It should respond with a status code 200 for the home route', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  test('It should respond with a status code 400 for invalid student data', async () => {
    const response = await request(app)
      .post('/add_student')
      .send({
        name: 'Invalid Student',
        exam1: 'Not a number',
        exam2: 85,
        exam3: 95,
      });
    expect(response.statusCode).toBe(400);
  });

  test('It should respond with a status code 400 if name field is missing', async () => {
    const response = await request(app)
      .post('/add_student')
      .send({
        exam1: 90,
        exam2: 85,
        exam3: 95,
      });
    expect(response.statusCode).toBe(400);
  });

  test('It should respond with a status code 400 if exam1 field is missing', async () => {
    const response = await request(app)
      .post('/add_student')
      .send({
        name: 'John Doe',
        exam2: 85,
        exam3: 95,
      });
    expect(response.statusCode).toBe(400);
  });
});

