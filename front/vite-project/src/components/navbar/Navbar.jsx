import logo from "../../assets/Logo.png";
import avatar from "../../assets/avatar.png";
import { getUserIdFromLocalStorage } from "../../helpers/actualUser";
import styles from "./Navbar.module.css"
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    let userId = getUserIdFromLocalStorage();

    const handleLogout = () => {
        const confirmed = window.confirm("Desea cerrar sesion?");
        if(confirmed) {
            localStorage.clear()
            navigate("/");
        }
    };
    return (
        <div className={styles.container}>
            <div className={styles.logoSection}>
                <img src = {logo} alt ="Logo"/>
            </div>
            <div className={styles.linkSection}>
                <Link to="/">
                    <span>Home</span>
                </Link>
                { userId && (<Link to="/appointments">
                    <span>Turnos</span>
                </Link>)}
                <Link to="/aboutUs">
                    <span>Sobre Nosotros</span>
                </Link>
                <Link to="/contactUs">
                    <span>Contacto</span>
                </Link>
                { !userId && (<Link to="/login">
                    <span>Iniciar Sesion</span>
                </Link>)}
                { !userId && (<Link to="/register">
                    <span>Registrarse</span>
                </Link>)}
                { userId && (<span onClick={handleLogout}>Cerrar Sesion</span>)}
            </div>
            <div className={styles.avatarSection}>
                <img src = {avatar} alt ="Avatar"/>
            </div>
        </div>
    )
}

export default NavBar