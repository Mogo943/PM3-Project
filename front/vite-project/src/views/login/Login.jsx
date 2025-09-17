import validateLogin from "../../helpers/validateLogin";
import { useFormik } from "formik";
import style from "./login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getUserIdFromLocalStorage } from "../../helpers/actualUser";
import { useEffect } from "react";

const POST_LOGIN_USER = "http://localhost:3000/users/login";

const Login = () => {
    const navigate = useNavigate();

    let userId = getUserIdFromLocalStorage();
    
        useEffect(() => {
            if(userId){
                navigate("/")
            }
        }, [userId, navigate])

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: validateLogin,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (values) => {
            console.log(values);
            formik.resetForm();
            const userData = {
                username: values.username,
                password: values.password
            }
            axios.post(POST_LOGIN_USER, userData)
                .then(({ data }) => {

                    alert("Usuario logeado exitosamente.");
                    localStorage.setItem("user", JSON.stringify(data.actualUser))
                    navigate("/");
                })
                .catch((error) => {
                    alert(`Error: ${error?.name} - ${error?.response?.data?.message}`)
                });
        },
    })

    return(
        <form className={style.form} onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="username">Usuario: </label>
                <input
                    type="text"
                    name="username"
                    placeholder="Usuario"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>
                {formik.touched.username && formik.errors.username && (
                    <p style={{color: "red", marginLeft: "12px"}}>
                        {formik.errors.username}
                    </p>
                )}
            <div>
                <label htmlFor="password">Contraseña: </label>
                <input
                    type="password"
                    name="password"
                    placeholder="**********"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>
                {formik.touched.password && formik.errors.password && (
                    <p style={{color: "red", marginLeft: "12px"}}>
                        {formik.errors.password}
                    </p>
                )}
            <p>Los campos con 
                <span style={{color: "red"}}> * </span>
                 son obligatorios
            </p>
            <button 
                type="submit"
                disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting}>
                    Iniciar Sesion
                </button>
        </form>
    )
}

export default Login;