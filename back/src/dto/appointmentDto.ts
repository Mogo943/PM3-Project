import { AppointmentStatus } from "../interfaces/IAppointment";

interface AppointmentDto {
    description: string,
    date: string,
    time: string,
    userId: number,
    status: AppointmentStatus
}

export default AppointmentDto;