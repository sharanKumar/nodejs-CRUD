const usersController = require('../controller/users.controller.js');
const router = require('express').Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API for users in the system
 */

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a User
 *     tags: [Users]
 *     description: Register a user using userName and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *                 example: 'John Doe'
 *               password:
 *                 type: string
 *                 example: 'password'
 *     responses:
 *       200:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'User registered successfully'
 */
router.post('/register', usersController.register);

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login a User
 *     tags: [Users]
 *     description: Login a user using userName and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *                 example: 'john@example.com'
 *               password:
 *                 type: string
 *                 example: 'password123'
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: 'your-jwt-token'
 */
router.post('/login', usersController.login);

module.exports = router;