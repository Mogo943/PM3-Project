import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CredentialEntitie } from "./credentialEntitie";

@Entity("users")
export class UserEntitie {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    birthdate: string

    @Column()
    nDni: number

    @OneToOne(() => CredentialEntitie, (credential) => credential.id)
    @JoinColumn()
    username: string

    @Column()
    password: string
}