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

    if(!foundAppointment) {
        throw new Error(`Appointment with id ${id} not found`)
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const appointmentDate = new Date(foundAppointment.date);
    appointmentDate.setHours(0, 0, 0, 0);

    if(appointmentDate.getTime() === today.getTime()){
        throw new Error("Appointments cannot be cancelled on the same day")
    }

    if(appointmentDate < today) {
        throw new Error("Past appointments cannot be cancelled")
    }
    
    foundAppointment.status = AppointmentStatus.CANCELLED
    await appointmentRepository.save(foundAppointment)
}