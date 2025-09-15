import { Request, Response, NextFunction } from "express";

const validateUser = (req: Request, res: Response, next: NextFunction) => {
    const { name, email, birthdate, nDni, username, password } = req.body;

    try {
        if(!name) throw new Error("Name required");
        if(name.length < 4) throw new Error("Name must have more than 4 characters");
        if(name.length > 50) throw new Error("Name must have less than 50 characters");

        if(!email) throw new Error("Email required");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) throw new Error("Invalid email format");

        if(!birthdate) throw new Error("Bitrhdate required");
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if(!dateRegex.test(birthdate)) throw new Error("Invalid birthdate format");
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const birthdateDate = new Date(birthdate);
        const ageDiff = new Date(today.getTime() - birthdateDate.getTime());
        const age = ageDiff.getUTCFullYear() - 1970;
        if(age < 16) throw new Error("User must be +16 years old");

        if(!nDni) throw new Error("DNI Required");
        if(typeof nDni !== "number") throw new Error("Incorrect type must be a number");
        if(nDni < 0) throw new Error("DNI can`t be negative");

        if(!username) throw new Error("Username required");
        if(username.length < 4) throw new Error("Username must have more than 4 characters");
        if(username.length > 20) throw new Error("Username must have less than 20 characters");
        
        if(!password) throw new Error("Password required");
        if(password.length < 4) throw new Error("Password must have more than 4 characters");
        if(password.length > 10) throw new Error("Password must have less than 10 characters");

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/
        if(!passwordRegex.test(password)) throw new Error("Password must hace one letter, one number and a special char at least");

    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({messsage: error.message})
        }
    }

    next();
}

export default validateUser;