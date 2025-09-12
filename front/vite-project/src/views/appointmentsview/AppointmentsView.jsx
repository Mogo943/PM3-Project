import MyAppointment from "../../components/myAppointments/MyAppointments"
import style from "./AppointmentsView.module.css"

const AppointmentsView = () => {
    return (
        <div className={style.container}>
            <h1>Turnos</h1>
            <h3>Estos son los turnos del usuario</h3>

            <div>
                <MyAppointment/>
            </div>
        </div>
    )
}

export default AppointmentsView