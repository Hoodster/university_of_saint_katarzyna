import { Link } from 'react-router-dom'
import styles from './navigation.module.scss'

function Navigation({ navItems }) {
    return (
        <nav style={styles}>
            <Link id='logo' to={'/'}>ST. KATHERINE</Link>
            {navItems.map(item => <Link style={{ padding: '5px 8px' }} key={item.name} to={item.destination}>{item.name}</Link>)}
        </nav>
    )
}

export default Navigation