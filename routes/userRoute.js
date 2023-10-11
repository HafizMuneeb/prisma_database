import express from 'express';
import signup from '../contollers/userController.js'

const router = express.Router();

router.route('/signup').post(signup)

export default router;