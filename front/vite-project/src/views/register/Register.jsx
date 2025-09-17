import { useFormik } from "formik";
import validateRegister from "../../helpers/validateRegister";
import style from "./register.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getUserIdFromLocalStorage } from "../../helpers/actualUser";
import { useEffect } from "react";

const POST_USER_URL = "http://localhost:3000/users/register";

const Register = () => {
    const navigate = useNavigate();
    
        let userId = getUserIdFromLocalStorage();
        
            useEffect(() => {
                if(userId){
                    navigate("/")
                }
            }, [userId, navigate])

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            birthdate: '',
            nDni: '',
            username: '',
            password: '',
        },
        validationSchema: validateRegister,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (values) => {
            console.log(values);
            formik.resetForm();
            const userData = {
                name: values.name,
                email: values.email,
                birthdate: values.birthdate,
                nDni: Number(values.nDni),
                username: values.username,
                password: values.password
            }
            axios.post(POST_USER_URL, userData)
                .then(({ data }) => {
                    alert("Usuario creado exitosamente.");
                    navigate("/login")
                })
                .catch((error) => {
                    alert(`Error: ${error?.name} - ${error?.response?.data?.message}`)
                });
        },
    });

    return(
        <form className={style.form} onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="name">Nombre: </label>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre Apellido"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>
                {formik.touched.name && formik.errors.name && (
                    <p style={{color: "red", marginLeft: "12px"}}>
                        {formik.errors.name}
                    </p>
                    )}
            <div>
                <label htmlFor="email">Correo electronico: </label>
                <input
                    type="text"
                    name="email"
                    placeholder="Ejemplo@email.com"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>
                {formik.touched.email && formik.errors.email && (
                    <p style={{color: "red", marginLeft: "12px"}}>
                        {formik.errors.email}
                    </p>
                )}
            <div>
                <label htmlFor="birthdate">Fecha de nacimiento: </label>
                <input
                    type="date"
                    name="birthdate"
                    value={formik.values.birthdate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>
                {formik.touched.birthdate && formik.errors.birthdate && (
                    <p style={{color: "red", marginLeft: "12px"}}>
                        {formik.errors.birthdate}
                    </p>
                )}
            <div>
                <label htmlFor="nDni">DNI: </label>
                <input
                    type="number"
                    name="nDni"
                    placeholder="xxxxxxxxx"
                    value={formik.values.nDni}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>
                {formik.touched.nDni && formik.errors.nDni && (
                    <p style={{color: "red", marginLeft: "12px"}}>
                        {formik.errors.nDni}
                    </p>
                )}
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
                {formik.touched.username &&  formik.errors.username && (
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
                Registrar
            </button>
        </form>
    )
}

export default Register;