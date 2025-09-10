import UserDto from "../dto/userDto";
import { createCredential } from "./credentialServices";
import { User } from "../entities/UserEntity";
import { userRepository } from "../repositories/indexRepository";
import { Credential } from "../entities/CredentialEntity";

export const getAllUsersService = async (): Promise<User[]> => {
    const users = await userRepository.find({
        relations: {appointments: true},
    })
    return users;
}

export const getUserByIdService = async (id: number): Promise<User> => {
    const user: User | null = await userRepository.findOne({
        where: { id },
        relations: { appointments: true },
    })
    if(!user) throw Error("User not found");
    return user;
}

export const registerService = async (userData: UserDto): Promise<User> => {
    const {username, password} = userData
    const {name, email, birthdate, nDni} = userData

    const foundUser: User | null = await userRepository.findOneBy({ email });
    if(foundUser) throw new Error ("User already exists")

    const newCredential: Credential = await createCredential({username, password});

    const newUser: User = userRepository.create({
        name,
        email,
        birthdate,
        nDni
    })
    await userRepository.save(newUser)

    newUser.credential = newCredential
    userRepository.save(newUser)

    return newUser
}

export const findUserByCredentialIdService = async (credentialId:number): Promise<User> => {
    const user: User | null = await userRepository.findOneBy({
        credential: { id: credentialId },
    })
    if(!user) throw Error("User not found");
    return user;
}