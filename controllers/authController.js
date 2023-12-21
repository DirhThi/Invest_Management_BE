const User = require("../model/user");
const ResError = require("../utils/ResError");


const authController = {

// [POST] auth/register
        register : async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        // Check if user with email already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            throw new ResError(400, 'Email đã tồn tại trong hệ thống!');
        }

        // Create a new user
        const newUser = new User({ name, email, password});
        await newUser.save();

        const resUser = newUser.toObject();
        delete resUser.password;

        res.status(201).json({ ...resUser});
    } catch (error) {
        next(error);
    }
    },

    // [POST] auth/login
         login : async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            throw new ResError(401, 'Email không chính xác');
        }
        console.log(user.password , password)
        // Check if the password is correct
        const isPasswordValid = password === user.password;
        if (!isPasswordValid) {
            console.log(isPasswordValid);
            throw new ResError(401, 'Mật khẩu không chính xác');
        }

        const resUser = user.toObject();
        delete resUser.password;
        res.status(200).json({
            ...resUser,
        });
    } catch (error) {
        next(error);
    }
},
};

module.exports = authController;
