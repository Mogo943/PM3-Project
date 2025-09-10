import { AppDataSource } from "../config/data-source";
import { User } from "../entities/UserEntity";
import { Appointment } from "../entities/AppointmentEntity";
import { Credential } from "../entities/CredentialEntity";


export const userRepository = AppDataSource.getRepository(User);
export const credentialRepository = AppDataSource.getRepository(Credential);
export const appointmentRepository = AppDataSource.getRepository(Appointment);