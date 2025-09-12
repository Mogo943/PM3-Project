import { useEffect, useState } from "react";
import AppointmentCard from "../appointment/AppointmentCard";
import axios from "axios"

const GET_APPOINTMENTS = "http://localhost:3000/appointments";

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    
    useEffect(() => {
        axios(GET_APPOINTMENTS)
            .then((response) => response.data)
            .then((appointmentsFromDB) => setAppointments(appointmentsFromDB))
            .catch((error) => {
                console.log(error)
            })
    }, []);

    return (
        <div style={{
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center",
        }}>
            {
                appointments.length ? 
                (appointments.map((appointmentCard, index) => {
                    return <AppointmentCard
                    key={index} 
                    id={appointmentCard.id}
                    date={appointmentCard.date}
                    time={appointmentCard.time}
                    description={appointmentCard.description}
                    status={appointmentCard.status}/>
                })) : <h3 style={{margin: "12%"}}>Sin turnos agendados</h3>
            }   
        </div>
    )
}

export default MyAppointment;