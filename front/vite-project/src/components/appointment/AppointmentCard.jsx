import { useState } from "react";
import style from "./AppointmentCard.module.css"

const AppointmentCard = (props) => {
    const {id, date, time, description, status} = props;
    
    const parsedDate = new Date(date);
    const formatDate = `${parsedDate.getDate() + 1} / ${parsedDate.getMonth() + 1} / ${parsedDate.getFullYear()}`

    const [statusAppointment, setStatusAppointment] = useState(status)

    const handleClick = () => {
        setStatusAppointment("cancelled")
    }
    return(
        <div className={`${style.container} ${statusAppointment !== "active" ? style.cancelled : style.container}`}>
            <h2 className={style.h2}>{id}</h2>

            <div className={style.dateTime}>
                <h3>{formatDate}</h3>
                <h4>{time} hs</h4>
            </div>

            <p className={style.description}>{description}</p>
            
            <div className={style.status}>
                {console.log(statusAppointment)}
                {
                    statusAppointment === "active" ? <button onClick={handleClick}>Cancelar</button> : <span>Cancelado</span>
                }
            </div>
        </div>
    )
}

export default AppointmentCard;