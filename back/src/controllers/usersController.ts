import { Request, Response } from "express";
import { getAllUsersService, getUserByIdService, registerService } from "../services/userServices";
import IUser from "../interfaces/IUser";

export const getAllUsers = async (req: Request, res:Response) => {
    const users: IUser[] = await getAllUsersService();
    res.status(200).json(users)
}

export const getUserById = async (req: Request, res:Response) => {
    const {id} = req.body;
    const user: IUser | undefined = await getUserByIdService(id);
    res.status(200).json(user)
}

export const register = async (req: Request, res:Response) => {
    const { username, password } = req.body
    const { name, email, birthdate, nDni } = req.body
    const newUser = await registerService({ name, email, birthdate, nDni }, { username, password });
    res.status(201).json(
        {message: "Registro de nuevo usuario",
        body: newUser
    })
}

export const login = async (req: Request, res:Response) => {
    res.status(200).json({message: "Login de nuevo usuario"})
}