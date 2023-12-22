const User = require("../model/user");
const ResError = require("../utils/ResError");

const userController = {

// [GET] /users/:email
     getUserByEmail : async (req, res, next) => {
        try {
            const user = await User.findOne({ email: req.params.email });
            if (!user) {
                throw new ResError(404, 'Không tìm thấy tài khoản!');
            }
            res.status(200).json(user);
        } catch (err) {
            next(err);
        }
    },
    };
    
    module.exports = userController;
    