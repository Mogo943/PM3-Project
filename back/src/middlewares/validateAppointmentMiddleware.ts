import { Request, Response, NextFunction } from "express";

const validateAppointment = (req: Request, res: Response, next: NextFunction) => {
    const { date, time, description } = req.body;

    try {
        if(!date) throw new Error("Date required");
        
        const appointmentDate = new Date(date);
        
        if (isNaN(appointmentDate.getTime())) {
            throw new Error("Invalid date format");
        }
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        const in14Days = new Date(today);
        in14Days.setDate(in14Days.getDate() + 14);

        if(appointmentDate < tomorrow || appointmentDate > in14Days) {
            throw new Error("Date must be between tomorrow and in 14 days");
        }

        const dayOfWeek = appointmentDate.getDay();

        if(dayOfWeek === 0 || dayOfWeek === 6){
            throw new Error("Appointments cannot be scheduled on Saturday or Sunday");
        }

        if(!time) throw new Error("Time is required");
        const validTimes = [
            "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
            "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
            "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
        ];
        if(!validTimes.includes(time)) throw new Error("Time must be a valid slot between 09:00 and 17:30");

        if(!description) throw new Error("Description required");
        if(typeof description !== "string") throw new Error("Description have to be a String");
        if(description.length < 4 || description.length > 50) throw new Error("Description lenght have to be between 4 and 50 characters");
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({message: error.message})
        }
    }

    next();
}

export default validateAppointment;