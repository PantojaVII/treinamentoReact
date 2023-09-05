import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'
function Navbar({ }) {
    return (
        <nav className={styles.list}>
            <li className={styles.item}><Link to='/'>Home</Link></li>
            <li className={styles.item}><Link to='/about'>Empresa</Link></li>
            <li className={styles.item}><Link to='/contact'>Contato</Link></li>
        </nav>)
}
export default Navbar