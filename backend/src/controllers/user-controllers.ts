import User from "../models/User.js"
import { NextFunction, Request, Response } from "express";
import { hash } from 'bcrypt';

export const getAllUsers = async (req:Request, res:Response, next:NextFunction) => {
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
export const userSignup = async (req:Request, res:Response, next:NextFunction) => {
    // user sign up
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await hash(password, 10);
        // brand new user
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        // we need to encrypt the password bcrypt used for this
        // const users = await User.find();
        return res.status(201).json({ message: "OK", id:user._id.toString() });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};