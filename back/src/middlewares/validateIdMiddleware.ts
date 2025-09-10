import { Request, Response, NextFunction } from "express";

const validateId = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.body;

    try {
        if(!id) throw new Error("ID required");
        if(id < 0) throw new Error("ID can`t be negative");
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({messsage: error.message})
        }
    }
    next();
}

export default validateId;