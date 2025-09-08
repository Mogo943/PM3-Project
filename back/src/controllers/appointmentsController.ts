import { Request, Response } from "express";
import IAppointment from "../interfaces/IAppointment";
import { cancelService, getAllAppointmentsService, getAppointmentDetailService, scheduleService } from "../services/appointmentServices";


export const getAllAppointments = async (req: Request, res:Response) => {
    try {
        const appointments: IAppointment[] = await getAllAppointmentsService();
        res.status(200).json(appointments);
    } catch (error:any) {
        res.status(400).json({message: error.message, error})
    }
    
}

export const getAppointmentDetail = async (req: Request, res:Response) => {
    try {
        const {id} = req.body;
        const appointment: IAppointment = await getAppointmentDetailService(id);
        res.status(200).json(appointment);
    } catch (error:any) {
        res.status(400).json({message: error.message, error})
    }
}

export const schedule = async (req: Request, res:Response) => {
    try {
        const {description, date, time, userId, status} = req.body
        const newAppointment: IAppointment = await scheduleService({description, date, time, userId})
        res.status(201).json(newAppointment)
    } catch (error:any) {
        res.status(400).json({message: error.message, error})
    }
}

export const cancel = async (req: Request, res:Response) => {
    try {
        const {id} = req.body;
        await cancelService(id)
        res.status(200).json({message: "cambiar el estatus de un turno a cancelled"})
    } catch (error:any) {
        res.status(400).json({message: error.message, error})
    }
}