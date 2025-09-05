import { Request, Response } from "express";
import IAppointment from "../interfaces/IAppointment";
import { cancelService, getAllAppointmentsService, getAppointmentDetailService, scheduleService } from "../services/appointmentServices";


export const getAllAppointments = async (req: Request, res:Response) => {
    const appointments: IAppointment[] = await getAllAppointmentsService();
    res.status(200).json(appointments);
}

export const getAppointmentDetail = async (req: Request, res:Response) => {
    const {id} = req.body;
    const appointment: IAppointment | undefined = await getAppointmentDetailService(id);
    res.status(200).json(appointment);
}

export const schedule = async (req: Request, res:Response) => {
    const {description, date, time, userId, status} = req.body
    const newAppointment: IAppointment = await scheduleService({description, date, time, userId, status})
    res.status(201).json(newAppointment)
}

export const cancel = async (req: Request, res:Response) => {
    const {id} = req.body;
    await cancelService(id)
    res.status(200).json({message: "cambiar el estatus de un turno a cancelled"})
}