import { Router } from "express";
import { getAllAppointments, getAppointmentDetail, schedule, cancel} from "../controllers/appointmentsController";
import validateId from "../middlewares/validateIdMiddleware";
import validateAppointment from "../middlewares/validateAppointmentMiddleware";

const appointmentRouter: Router = Router();

appointmentRouter.get("/", getAllAppointments);
appointmentRouter.get("/:id", validateId, getAppointmentDetail);
appointmentRouter.post("/schedule", validateAppointment, schedule);
appointmentRouter.put("/cancel", validateId, cancel);

export default appointmentRouter;