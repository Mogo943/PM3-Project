import { Request, Response } from "express";
import { findUserByCredentialIdService, getAllUsersService, getUserByIdService, registerService } from "../services/userServices";
import IUser from "../interfaces/IUser";
import { validateCredentialService } from "../services/credentialServices";

export const getAllUsers = async (req: Request, res:Response) => {
    try {
       const users: IUser[] = await getAllUsersService();
        res.status(200).json(users) 
    } catch (error: any) {
        res.status(404).json({message: error.message, error})
    }
}

export const getUserById = async (req: Request, res:Response) => {
    try {
        const {id} = req.body;
        const user: IUser = await getUserByIdService(Number(id));
        res.status(200).json(user)
    } catch (error:any) {
        res.status(404).json({message: error.message, error})
    }
}

export const register = async (req: Request, res:Response) => {
    try {
        const { name, email, birthdate, nDni, username, password } = req.body
        const newUser = await registerService({ name, email, birthdate, nDni, username, password });
        res.status(201).json(
        {message: "Registro de nuevo usuario",
        body: newUser
    })
    } catch (error: any) {
        res.status(404).json({message: error.message, error})
    }
}

export const login = async (req: Request, res:Response) => {
    try {
        const { username, password } = req.body
        const credential = await validateCredentialService({username, password})
        const actualUser = await findUserByCredentialIdService(credential.id)

        res.status(200).json({
            login: true,
            actualUser,
            credential
        })
    } catch (error: any) {
        res.status(404).json({message: error.message, error})
    }
}