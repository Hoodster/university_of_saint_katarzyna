import { Link, useNavigate } from 'react-router-dom'
import styles from './navigation.module.scss'
import { Button } from '@chakra-ui/react';

function Navigation({ navItems }) {
    const navigate = useNavigate();
    return (
        <nav id='navigation' style={styles}>
            <Link id='logo' to={'/'}>ST. KATHERINE</Link>
            <Separator />
            <div className={styles.items}>
                {navItems.map(item => <Link style={{ padding: '5px 8px' }} key={item.name} to={item.destination}>{item.name}</Link>)}
            </div>
            <Separator />
            <Button onClick={() => navigate('/edu-platform')} style={{minWidth: '70px'}}>Saint ID</Button>
        </nav>
    )
}

function Separator() {
    return (<div style={{ flex: '1 100%' }} />);
}

export default Navigation