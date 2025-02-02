const tutorialController = require('../controller/tutorials.controller.js');
const auth = require('../auth/auth.js');
const router = require('express').Router();

/**
 * @swagger
 * tags:
 *   name: Tutorials
 *   description: API for tutorials in the system
 */

/**
 * @swagger
 * /api/tutorials:
 *   post:
 *     summary: Create a new Tutorial
 *     tags: [Tutorials]
 *     description: Create a new tutorial with title and description
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: 'Tutorial Title'
 *               description:
 *                 type: string
 *                 example: 'Tutorial Description'
 *     responses:
 *       200:
 *         description: Tutorial created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   example: 'Tutorial Title'
 *                 description:
 *                   type: string
 *                   example: 'Tutorial Description'
 */
router.post('/', auth.verifyToken, tutorialController.create);

/**
 * @swagger
 * /api/tutorials:
 *   get:
 *     summary: Retrieve all Tutorials
 *     tags: [Tutorials]
 *     description: Retrieve all tutorials
 *     responses:
 *       200:
 *         description: A list of tutorials
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                     example: 'Tutorial Title'
 *                   description:
 *                     type: string
 *                     example: 'Tutorial Description'
 */
router.get('/', auth.verifyToken, tutorialController.findAll);

/**
 * @swagger
 * /api/tutorials/published:
 *   get:
 *     summary: Retrieve all Published Tutorials
 *     tags: [Tutorials]
 *     description: Retrieve all published tutorials
 *     responses:
 *       200:
 *         description: A list of published tutorials
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                     example: 'Published Tutorial Title'
 *                   description:
 *                     type: string
 *                     example: 'Published Tutorial Description'
 */
router.get('/published', auth.verifyToken, tutorialController.findAllPublished);

/**
 * @swagger
 * /api/tutorials/{id}:
 *   get:
 *     summary: Retrieve a single Tutorial by ID
 *     tags: [Tutorials]
 *     description: Retrieve a single tutorial by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The tutorial ID
 *     responses:
 *       200:
 *         description: A single tutorial
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   example: 'Tutorial Title'
 *                 description:
 *                   type: string
 *                   example: 'Tutorial Description'
 */
router.get('/:id', auth.verifyToken, tutorialController.findOne);

/**
 * @swagger
 * /api/tutorials/{id}:
 *   put:
 *     summary: Update a Tutorial by ID
 *     tags: [Tutorials]
 *     description: Update a tutorial by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The tutorial ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: 'Updated Tutorial Title'
 *               description:
 *                 type: string
 *                 example: 'Updated Tutorial Description'
 *     responses:
 *       200:
 *         description: Tutorial updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   example: 'Updated Tutorial Title'
 *                 description:
 *                   type: string
 *                   example: 'Updated Tutorial Description'
 */
router.put('/:id', auth.verifyToken, tutorialController.update);

/**
 * @swagger
 * /api/tutorials/{id}:
 *   delete:
 *     summary: Delete a Tutorial by ID
 *     tags: [Tutorials]
 *     description: Delete a tutorial by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The tutorial ID
 *     responses:
 *       200:
 *         description: Tutorial deleted successfully
 */
router.delete('/:id', auth.verifyToken, tutorialController.delete);

/**
 * @swagger
 * /api/tutorials:
 *   delete:
 *     summary: Delete all Tutorials
 *     tags: [Tutorials]
 *     description: Delete all tutorials
 *     responses:
 *       200:
 *         description: All tutorials deleted successfully
 */
router.delete('/', auth.verifyToken, tutorialController.deleteAll);

/**
 * @swagger
 * /api/tutorials/generateToken:
 *   post:
 *     summary: Generate a new Token
 *     tags: [Tutorials]
 *     description: Generate a new authentication token
 *     responses:
 *       200:
 *         description: Token generated successfully
 */
router.post('/generateToken', auth.generateToken);

module.exports = router;
