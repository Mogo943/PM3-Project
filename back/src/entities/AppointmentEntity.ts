import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AppointmentStatus } from "../interfaces/IAppointment";
import { User } from "./UserEntity";

@Entity({ name:"appointments" })
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string
    
    @Column()
    date: Date

    @Column()
    time: string
    
    @Column({
        default: AppointmentStatus.ACTIVE
    })
    status: AppointmentStatus

    @ManyToOne(() => User, (user) => user.appointments)
    @JoinColumn({ name: "user_id"})
    user: User
}