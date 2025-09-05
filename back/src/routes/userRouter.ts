import { Router } from "express";
import { getAllUsers, getUserById, register, login } from "../controllers/usersController";

const userRouter: Router = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/register", register);
userRouter.post("/login", login);

export default userRouter;