import { Router } from "express"
import userRouter from "./userRouter";
import appointmentRouter from "./appointmentRouter"

const IndexRouter: Router = Router()

IndexRouter.use("/users", userRouter);
IndexRouter.use("/appointments", appointmentRouter);

export default IndexRouter;