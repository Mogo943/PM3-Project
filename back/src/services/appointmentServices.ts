import AppointmentDto from "../dto/appointmentDto";
import IAppointment, { AppointmentStatus } from "../interfaces/IAppointment";


let appointments: IAppointment[] = [];
let id: number = 1;

export const getAllAppointmentsService = async (): Promise<IAppointment[]> => {
    return appointments;
}

export const getAppointmentDetailService = async (id: number): Promise<IAppointment | undefined> => {
    const appointment: IAppointment | undefined = appointments.find((item: IAppointment) => {
        return item.id === id
    });

    return appointment;
}

export const  scheduleService = async (appointmentData: AppointmentDto): Promise<IAppointment> => {
    const newAppointment: IAppointment = {
        id,
        description: appointmentData.description,
        date: appointmentData.date,
        time: appointmentData.time,
        userId: appointmentData.userId,
        status: appointmentData.status
    }
    appointments.push(newAppointment);
    id++;
    return newAppointment;
}

export const cancelService = async (id: number): Promise<void> => {
    const appointment: IAppointment | undefined = appointments.find((item:IAppointment) => item.id === id);

    if(appointment) {
        appointment.status = AppointmentStatus.CANCELLED
    } else {
        throw new Error(`Appointment with id ${id} not found`)
    }
}