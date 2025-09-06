import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AppointmentStatus } from "../interfaces/IAppointment";
import { UserEntitie } from "./userEntitie";

@Entity("appointments")
export class AppointmentEntitie {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string
    
    @Column()
    date: string

    @Column()
    time: string

    @ManyToOne(() => UserEntitie, (user) => user.id)
    @JoinColumn()
    userId: number

    @Column()
    status: AppointmentStatus
}