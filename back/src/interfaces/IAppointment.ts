export enum AppointmentStatus {
    ACTIVE = "active",
    CANCELLED = "cancelled"
}

interface IAppointment {
    id: number,
    description: string,
    date: string,
    time: string,
    userId: number,
    status: AppointmentStatus
}

export default IAppointment;