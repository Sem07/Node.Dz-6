const { ErrorHandler, errors } = require('../../error');
const { checkHash } = require('../../utils');

module.exports = {
    loginUser: async (req, res, next) => {
        try {
            const { password } = req.body;
            const { user } = req.user;

            const status = await checkHash(password, user.password);

            if (!status) {
                throw new ErrorHandler(errors.WRONG_EMAIL_OR_PASS.massage, errors.WRONG_EMAIL_OR_PASS.code);
            }
            res.json(user);
        } catch (e) {
            next(e);
        }
    }
};
