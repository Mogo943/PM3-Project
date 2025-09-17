import MyAppointment from "../../components/myAppointments/MyAppointments"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getUserIdFromLocalStorage } from "../../helpers/actualUser";

const AppointmentsView = () => {
    const navigate = useNavigate();
    
    let userId = getUserIdFromLocalStorage();
    useEffect(() => {
            if(!userId){
                navigate("/")
            }
        }, [userId, navigate])
    return (
        <div style={{textAlign: "center"}}>
            <MyAppointment/>
        </div>
    )
}

export default AppointmentsView
