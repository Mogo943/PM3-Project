import CredentialDto from "../dto/credentialDto";
import UserDto from "../dto/userDTo";
import ICredential from "../interfaces/ICredential";
import IUser from "../interfaces/IUser";
import { createCredential } from "./credentialServices";

let users: IUser[] = [];
let id: number = 1;

export const getAllUsersService = async (): Promise<IUser[]> => {
    return users;
}

export const getUserByIdService = async (id: number): Promise<IUser | undefined> => {
    const user: IUser | undefined = users.find((item:IUser) => {
        return item.id === id
    })

    return user;
}

export const registerService = async (userData: UserDto, credentialData: CredentialDto): Promise<IUser> => {
    const newCredential: ICredential = await createCredential(credentialData);

    const newUser: IUser = {
        id,
        email: userData.email,
        name: userData.name,
        birthdate: userData.birthdate,
        nDni: userData.nDni,
        credentialId: newCredential.id
    }
    users.push(newUser);
    id++;
    return newUser;
}