import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credential } from "./CredentialEntity";
import { Appointment } from "./AppointmentEntity";

@Entity({ name:"users" })
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ unique:true })
    email: string

    @Column()
    birthdate: string

    @Column()
    nDni: number

    @OneToOne(() => Credential)
    @JoinColumn({ name: "credential_id"})
    credential: Credential

    @OneToMany(() => Appointment, (appointment) => appointment.user)
    appointments: Appointment[]
}