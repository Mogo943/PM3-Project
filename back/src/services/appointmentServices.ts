import AppointmentDto from "../dto/appointmentDto";
import { AppointmentStatus } from "../interfaces/IAppointment";
import { appointmentRepository, userRepository } from "../repositories/indexRepository";
import { Appointment } from "../entities/AppointmentEntity";
import { User } from "../entities/UserEntity";

export const getAllAppointmentsService = async (): Promise<Appointment[]> => {
    const appointments = await appointmentRepository.find({
        relations: { user: true },
    })
    return appointments;
}

export const getAppointmentDetailService = async (id: number): Promise<Appointment> => {
    const appointment: Appointment | null = await appointmentRepository.findOneBy({
        id
    })
    if(!appointment) throw Error("Appointment not found");
    return appointment;
}

export const  scheduleService = async (appointmentData: AppointmentDto): Promise<Appointment> => {
    const { userId } = appointmentData;

    const user: User | null = await userRepository.findOneBy({id: userId});
    if(!user) throw new Error("User not found");
    
    const newAppointment: Appointment = appointmentRepository.create(appointmentData);
    newAppointment.user = user;
    
    await appointmentRepository.save(newAppointment);
    return newAppointment;
}

export const cancelService = async (id: number): Promise<void> => {
    const foundAppointment: Appointment | null = await appointmentRepository.findOne({
        where: { id }
    })

    if(foundAppointment) {
        foundAppointment.status = AppointmentStatus.CANCELLED
        await appointmentRepository.save(foundAppointment)
    } else {
        throw new Error(`Appointment with id ${id} not found`)
    }
}