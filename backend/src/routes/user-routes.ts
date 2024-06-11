import { Router } from "express";
import { getAllUsers, userSignup } from "../controllers/user-controllers.js";
import { sigupValidator, validate } from "../utils/validators.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers) 
// before sign up there should be validation as well right
// use middleware
userRoutes.post("/signup",validate(sigupValidator), userSignup)


export default userRoutes;