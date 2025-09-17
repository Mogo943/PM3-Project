import { Request, Response } from "express";
import { cancelService, getAllAppointmentsService, getAppointmentDetailService, scheduleService } from "../services/appointmentServices";
import { Appointment } from "../entities/AppointmentEntity";

export const getAllAppointments = async (req: Request, res:Response) => {
    try {
        const appointments: Appointment[] = await getAllAppointmentsService();
        res.status(200).json(appointments);
    } catch (error:any) {
        res.status(404).json({message: error.message, error})
    }
    
}

export const getAppointmentDetail = async (req: Request, res:Response) => {
    try {
        const {id} = req.body;
        const appointment: Appointment = await getAppointmentDetailService(id);
        res.status(200).json(appointment);
    } catch (error:any) {
        res.status(404).json({message: error.message, error})
    }
}

export const schedule = async (req: Request, res:Response) => {
    try {
        const {description, date, time, userId} = req.body
        const newAppointment: Appointment = await scheduleService({description, date, time, userId})
        res.status(201).json(newAppointment)
    } catch (error:any) {
        res.status(400).json({message: error.message, error})
    }
}

export const cancel = async (req: Request, res:Response) => {
    try {
        const {id} = req.body;
        await cancelService(id)
        res.status(200).json({message: "Turno cancelado"})
    } catch (error:any) {
        res.status(404).json({message: error.message, error})
    }
}