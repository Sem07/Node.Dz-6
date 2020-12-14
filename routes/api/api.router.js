const { Router } = require('express');
const usersRouter = require('../user/user.router');
const authRouter = require('../auth/auth.router');

const apiRouter = Router();

apiRouter.use('/users', usersRouter);
apiRouter.use('/auth', authRouter);

module.exports = apiRouter;
