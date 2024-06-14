import User from "../models/User.js";
import { hash, compare } from 'bcrypt';
export const getAllUsers = async (req, res, next) => {
    // get all users from db
    try {
        const users = await User.find();
        return res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
// in postman in the body as this is post we will be sending dat aalso
export const userSignup = async (req, res, next) => {
    // user sign up
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(401).send("User already registered");
        const hashedPassword = await hash(password, 10);
        // brand new user
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        // we need to encrypt the password bcrypt used for this
        // const users = await User.find();
        return res.status(201).json({ message: "OK", id: user._id.toString() });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
export const userLogin = async (req, res, next) => {
    // user login
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }); //filter
        if (!user) {
            return res.status(401).send("User not registered");
        }
        const isPasswordCorrect = await compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(403).send("Incorrect Password");
        }
        return res.status(200).json({ message: "OK", id: user._id.toString() });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
//# sourceMappingURL=user-controllers.js.map