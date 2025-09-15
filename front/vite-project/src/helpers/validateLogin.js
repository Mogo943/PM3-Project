import * as Yup from "yup";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/;

const validateLogin = Yup.object ({
    username: Yup.string()
        .required("*")
        .min(4, "El nombre de usuario debe contener al menos 4 caracteres")
        .max(20, "El nombre de usuario debe tener maximo 20 caracteres"),
    password: Yup.string()
        .required("*")
        .min(4, "La contraseña debe contener al menos 4 caracteres")
        .max(10, "La contraseña debe contener maximo 10 caracteres")
        .matches(passwordRegex, "La contraseña debe tener al menos un numero, una letra mayuscula y un caracter especial"),
})

export default validateLogin;