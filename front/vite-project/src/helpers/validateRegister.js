import * as Yup from "yup";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/;

const validateRegister = Yup.object ({
    name: Yup.string()
        .required("*")
        .min(4, "El nombre debe contener al menos 4 caracteres")
        .max(50, "El nombre debe tener maximo 50 caracteres"),
    email: Yup.string()
        .required("*")
        .email("Formato invalido"),
    birthdate: Yup.date()
        .required("*")
        .test("age_check", "El usuario debe ser mayor de 16 años", function(value){
            if(!value) return false;
            const today = new Date();
            const birthdateDate = new Date(value);
            const ageDiff = today.getFullYear() - birthdateDate.getFullYear();
            const monthDiff = today.getMonth() - birthdateDate.getMonth();
            const dayDiff = today.getDate() - birthdateDate.getDate(); 

            if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                return ageDiff - 1 >= 16;
            }

            return ageDiff >= 16;
        }),
    nDni: Yup.number()
        .required("*")
        .test("dni-check", "El DNI debe tener maximo 9 digitos", (value) => {
            if(!value) return false;
            const regex = /^\d{8}$/;
            return regex.test(value)
        }),
    username: Yup.string()
        .required("*")
        .min(4, "El nombre de usuario debe contener al menos 4 caracteres")
        .max(20, "El nombre de usuario debe tener maximo 20 caracteres"),
    password: Yup.string()
        .required("*")
        .min(4, "La contraseña debe contener al menos 4 caracteres")
        .max(10, "La contraseña debe contener maximo 10 caracteres")
        .matches(passwordRegex, "La contraseña debe tener al menos una letra minúscula, una letra mayúscula, un número y un caracter especial"),

})

export default validateRegister;