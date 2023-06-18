import { Link } from 'react-router-dom'
import styles from './navbar.module.css'

export default function Navbar(){

    return(
        <nav className={styles.navbarStyle}> {/* Barra de Navegação do sistema */}

            <h1 className={styles.h1}>Criptografia de Arquivo</h1>
            <ul className={styles.items}>
                <li> <Link to='/'>Criptografar</Link> </li>
                <li> <Link to='/ButtonDecrypt'>Descriptografar</Link> </li>
            </ul>

        </nav>
    )

 };