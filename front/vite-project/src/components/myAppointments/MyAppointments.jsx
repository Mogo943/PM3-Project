import { useState } from "react";
import myAppointments from "../../helpers/myAppointments";
import Appointment from "../appointment/appointment";

const MyAppointment = () => {
    const [appointments, setAppointments] = useState(myAppointments);
    
    return (
        <div>
            {appointments.map((appointment) => {
                return <Appointment/>
            })}   
        </div>
    )
}

export default MyAppointment;