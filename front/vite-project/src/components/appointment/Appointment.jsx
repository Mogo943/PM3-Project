import style from "./Appointment.module.css"

const Appointment = () => {
    return(
        <div className={style.container}>
            <h2 className={style.h2}>ID</h2>

            <div className={style.dateTime}>
                <h3>Date</h3>
                <h4>Time</h4>
            </div>

            <p className={style.description}>Description</p>

            <div className={style.status}>
                <span>Status</span>
                <button>Cancel</button>
            </div>
        </div>
    )
}

export default Appointment;