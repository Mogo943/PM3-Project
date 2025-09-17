import { useFormik } from "formik";
import validateAppointment from "../../helpers/validateAppointment";
import axios from "axios";
import style from "./AppointmentForm.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getUserIdFromLocalStorage } from "../../helpers/actualUser";

const POST_APPOINTMENT = "http://localhost:3000/appointments/schedule";

const AppointmentForm = () => {
    const navigate = useNavigate();
    
    let userId = getUserIdFromLocalStorage();

    useEffect(() => {
        if(!userId){
            navigate("/")
        }
    }, [userId, navigate])

    const toUTCDate = (dateStr) => {
        const [year, month, day] = dateStr.split("-");
        return new Date(Date.UTC(year, month - 1, day)); 
    };
    
    console.log(userId)
    const formik = useFormik({
        initialValues: {
            date: '',
            time: '',
            description: '',
            userId: String(userId)
        },
        validationSchema: validateAppointment,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (values) => {
            console.log(values);
            formik.resetForm();
            const appointmentData = {
                date: toUTCDate(values.date).toISOString(),
                time: values.time,
                description: values.description,
                userId: Number(values.userId)
            }
            axios.post(POST_APPOINTMENT, appointmentData)
                .then(({ data }) => {
                    alert("Turno agendado exitosamente")
                    navigate("/appointments")
                })
                .catch((error) => {
                    alert(`Error: ${error?.name} - ${error?.response?.data?.message}`)
                })
        }
    })
    return (
        <form className={style.form} onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="date">Fecha: </label>
                <input
                    type="date"
                    name="date"
                    value={formik.values.date}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>
            {formik.touched.date && formik.errors.date && (
                <p style={{color: "red", marginLeft: "12px"}}>
                    {formik.errors.date}
                </p>
            )}
            <div>
                <label htmlFor="time">Hora: </label>
                <input
                    type="time"
                    name="time"
                    value={formik.values.time}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>
            {formik.touched.time && formik.errors.time && (
                <p style={{color: "red", marginLeft: "12px"}}>
                    {formik.errors.time}
                </p>
            )}
            <div>
                <label htmlFor="date">Descripcion: </label>
                <input
                    type="text"
                    name="description"
                    placeholder="Descripcion del turno"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>
            {formik.touched.description && formik.errors.description && (
                <p style={{color: "red", marginLeft: "12px"}}>
                    {formik.errors.description}
                </p>
            )}
            <p>Los campos con 
                <span style={{color: "red"}}> * </span>
                 son obligatorios
            </p>
            <button 
            type="submit"
            disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting}>
                Agendar Turno
            </button>
        </form>
    )
}

export default AppointmentForm;