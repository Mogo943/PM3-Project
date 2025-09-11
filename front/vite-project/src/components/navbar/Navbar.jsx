import logo from "../../assets/Logo.png";
import avatar from "../../assets/avatar.png";
import styles from "./Navbar.module.css"

const NavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logoSection}>
                <img src = {logo} alt ="Logo"/>
            </div>
            <div className={styles.linkSection}>
                <span>Home</span>
                <span>Turnos</span>
                <span>Sobre Nosotros</span>
                <span>Contacto</span>
            </div>
            <div className={styles.avatarSection}>
                <img src = {avatar} alt ="Avatar"/>
            </div>
        </div>
    )
}

export default NavBar