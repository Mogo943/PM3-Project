import { Router } from "express";
import { getAllAppointments, getAppointmentDetail, schedule, cancel} from "../controllers/appointmentsController";

const appointmentRouter: Router = Router();

appointmentRouter.get("/", getAllAppointments);
appointmentRouter.get("/:id", getAppointmentDetail);
appointmentRouter.post("/schedule", schedule);
appointmentRouter.put("/cancel", cancel);

export default appointmentRouter;