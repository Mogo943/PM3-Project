import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { UserEntitie } from "./userEntitie"

@Entity("credentials")
export class CredentialEntitie {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => UserEntitie, (user) => user.username)
    @JoinColumn()
    username: string

    @Column()
    password: string
}