import { Router } from "express";
import { getAllUsers, userLogin, userlogout, userSignup, verifyUser } from "../controllers/user-controllers.js";
import { loginValidator, sigupValidator, validate } from "../utils/validators.js";
import { verifyToken } from "../utils/token-manager.js";
const userRoutes = Router();
userRoutes.get("/", getAllUsers);
// before sign up there should be validation as well right
// use middleware
userRoutes.post("/signup", validate(sigupValidator), userSignup);
userRoutes.post("/login", validate(loginValidator), userLogin);
userRoutes.get("/auth-status", verifyToken, verifyUser);
userRoutes.get("/logout", verifyToken, userlogout);
export default userRoutes;
//# sourceMappingURL=user-routes.js.map