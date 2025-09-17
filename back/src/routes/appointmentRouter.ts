import { Router } from "express";
import { getAllAppointments, getAppointmentDetail, schedule, cancel} from "../controllers/appointmentsController";
import validateAppointment from "../middlewares/validateAppointmentMiddleware";

const appointmentRouter: Router = Router();

appointmentRouter.get("/", getAllAppointments);
appointmentRouter.get("/:id", getAppointmentDetail);
appointmentRouter.post("/schedule", validateAppointment, schedule);
appointmentRouter.put("/cancel", cancel);

export default appointmentRouter;