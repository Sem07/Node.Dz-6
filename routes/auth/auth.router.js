const { Router } = require('express');

const authController = require('../../controllers/auth');
const { authMiddlewares } = require('../../middlewares');

const authRouter = Router();

authRouter.post('/', authMiddlewares.checkAuthUserValid, authMiddlewares.checkIsUserCreated, authController.loginUser);

module.exports = authRouter;
