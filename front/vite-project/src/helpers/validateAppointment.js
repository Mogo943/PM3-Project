import * as Yup from "yup";

const validateAppointment = Yup.object({
    date: Yup.date()
        .required("*")
        .test("date-check", "La fecha debe ser entre mañana y dentro de 14 dias", (value) => {
            if(!value) return false;
            const appointmentDate = new Date(value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            const in14Days = new Date(today);
            in14Days.setDate(in14Days.getDate() + 14);

            if(appointmentDate < tomorrow || appointmentDate > in14Days) {
                return false;
            }

            return appointmentDate >= tomorrow && appointmentDate <= in14Days;
        }),
    time: Yup.string()
        .required("*")
        .test("time-check", "La hora debe ser entre las 09:00 y las 17:30", (value) => {
            if(!value) return false;

            const validTimes = [
            "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
            "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
            "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
            ];

            return validTimes.includes(value);
        }),
    description: Yup.string()
        .required("*")
        .min(4, "La descripcion debe tener al menos 4 caracteres")
        .max(50, "La descripcion debe tener maximo 50 caracteres"),
    userId: Yup.number()
        .required("No user id found")
})

export default validateAppointment;