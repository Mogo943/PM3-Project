import { Request, Response, NextFunction } from "express";

const validateCredential = (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    try {
        if(!username) throw new Error("Username required");
        if(username.length < 4) throw new Error("Username must have more than 4 characters");
        if(username.length < 20) throw new Error("Username must have less than 20 characters");
        
        if(!password) throw new Error("Password required");
        if(password.length < 4) throw new Error("Password must have more than 4 characters");
        if(password.length < 10) throw new Error("Password must have less than 20 characters");

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/
        if(!passwordRegex.test(password)) throw new Error("Password must hace one letter, one number and a special char at least");

    } catch (error) {
        if(error instanceof Error){
             return res.status(400).json({messsage: error.message})
        }
    }

    next();
}

export default validateCredential;