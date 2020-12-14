const express = require('express');

const { apiRouter } = require('./routes');
const { sequelize } = require('./base');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => {
    res
        .status(err.code)
        .json({
            message: err.message,
            ok: false
        });
});
(async () => {
    await sequelize.sync({ alter: true });
    app.listen(port, (err) => err && console.log(err) || console.log(`Listen ${port} ...`));
})();
