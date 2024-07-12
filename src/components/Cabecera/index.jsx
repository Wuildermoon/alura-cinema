import { Link } from "react-router-dom"
import styles from "./Cabecera.module.css"
import logo from "./logo-alura.png"
import CabeceraLink from "../CabeceraLink"


const Cabecera = () => {
    return (
        <header className={styles.cabecera}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo Alura" />  <span>Cinema</span>
                </section>
            </Link>
            <CabeceraLink url="./">
                Home
            </CabeceraLink>
            <CabeceraLink url="./">
                Favoritos
            </CabeceraLink>
        </header>
    )
}

export default Cabecera;