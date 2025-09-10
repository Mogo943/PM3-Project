import { Router } from "express";
import { getAllUsers, getUserById, register, login } from "../controllers/usersController";
import validateUser from "../middlewares/validateUserMiddleware";
import validateId from "../middlewares/validateIdMiddleware";
import validateCredential from "../middlewares/validateCredentialsMiddleware";

const userRouter: Router = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", validateId, getUserById);
userRouter.post("/register", validateUser, register);
userRouter.post("/login", validateCredential, login);

export default userRouter;