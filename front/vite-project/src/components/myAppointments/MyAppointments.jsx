import { useEffect, useState } from "react";
import AppointmentCard from "../appointment/AppointmentCard";
import style from "./MyAppointments.module.css"
import axios from "axios"
import { Link } from "react-router-dom"
import { getUserIdFromLocalStorage } from "../../helpers/actualUser";

const GET_APPOINTMENTS = "http://localhost:3000/users";

const MyAppointment = () => {

    let userId = getUserIdFromLocalStorage();

    const [appointments, setAppointments] = useState([]);
    
    useEffect(() => {
        axios.get(`${GET_APPOINTMENTS}/${userId}`)
            .then((response) => {
                return response.data.appointments
            })
            .then((appointmentsFromDB) => setAppointments(appointmentsFromDB))
            .catch((error) => {
                console.log(error?.response?.data?.message)
            })
    }, [userId]);

    return (
        <div style={{
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center",
        }}>
            <div className={style.header}>
                <Link to="/appointments/set-appointment">
                    <button>Agendar Turno</button>
                </Link>
            </div>
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
                })) : <h3>Sin turnos agendados</h3>
            }   
        </div>
    )
}

export default MyAppointment;