import UserDto from "../dto/userDto";
import ICredential from "../interfaces/ICredential";
import IUser from "../interfaces/IUser";
import { createCredential } from "./credentialServices";
import { userRepository } from "../config/data-source";

let users: IUser[] = [];
let id: number = 1;

export const getAllUsersService = async (): Promise<IUser[]> => {
    return users;
}

export const getUserByIdService = async (id: number): Promise<IUser> => {
    const user: IUser | undefined = users.find((item:IUser) => {
        return item.id === id
    })
    if(!user) throw Error("User not found");
    return user;
}

export const registerService = async (userData: UserDto): Promise<IUser> => {
    const {username, password} = userData
    const newCredential: ICredential = await createCredential({username, password});

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

export const findUserByCredentialIdService = async (credentialId:number): Promise<IUser> => {
    const user: IUser | undefined = users.find((item:IUser) => {
        return item.id === credentialId
    })
    if(!user) throw Error("User not found");
    return user;
}