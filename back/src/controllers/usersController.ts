import { Request, Response } from "express";
import { findUserByCredentialIdService, getAllUsersService, getUserByIdService, registerService } from "../services/userServices";
import { User } from "../entities/UserEntity";
import { validateCredentialService } from "../services/credentialServices";

export const getAllUsers = async (req: Request, res:Response) => {
    try {
       const users: User[] = await getAllUsersService();
        res.status(200).json(users) 
    } catch (error: any) {
        res.status(404).json({message: error.message, error})
    }
}

export const getUserById = async (req: Request, res:Response) => {
    try {
        const {id} = req.body;
        const user: User = await getUserByIdService(Number(id));
        res.status(200).json(user)
    } catch (error:any) {
        res.status(404).json({message: error.message, error})
    }
}

export const register = async (req: Request, res:Response) => {
    try {
        const { name, email, birthdate, nDni, username, password } = req.body
        const newUser: User = await registerService({ name, email, birthdate, nDni, username, password });
        const { credential, ...userWithoutCredential} = newUser;
        res.status(201).json(userWithoutCredential)
    } catch (error: any) {
        res.status(400).json({message: error.message, error})
    }
}

export const login = async (req: Request, res:Response) => {
    try {
        const { username, password } = req.body
        const credentialId: number = await validateCredentialService({username, password})
        const actualUser: User = await findUserByCredentialIdService(credentialId)

        res.status(200).json({
            login: true,
            actualUser,
        })
    } catch (error: any) {
        res.status(400).json({message: error.message, error})
    }
}