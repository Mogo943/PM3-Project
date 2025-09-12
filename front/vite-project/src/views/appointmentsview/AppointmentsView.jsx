import MyAppointment from "../../components/myAppointments/MyAppointments"
import style from "./AppointmentsView.module.css"

const AppointmentsView = () => {
    return (
        <div className={style.container}>
            <h1>Turnos</h1>

            <div>
                <MyAppointment/>
            </div>
        </div>
    )
}

export default AppointmentsView