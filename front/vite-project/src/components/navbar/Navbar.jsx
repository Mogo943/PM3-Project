import logo from "../../assets/Logo.png";
import avatar from "../../assets/avatar.png";
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logoSection}>
                <img src = {logo} alt ="Logo"/>
            </div>
            <div className={styles.linkSection}>
                <Link to="/">
                    <span>Home</span>
                </Link>
                <Link to="/appointments">
                    <span>Turnos</span>
                </Link>
                <Link to="/aboutUs">
                    <span>Sobre Nosotros</span>
                </Link>
                <Link to="/contactUs">
                    <span>Contacto</span>
                </Link>
            </div>
            <div className={styles.avatarSection}>
                <img src = {avatar} alt ="Avatar"/>
            </div>
        </div>
    )
}

export default NavBar