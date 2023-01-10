import styles from './Routes.module.css';

import logo from '../assets/logo.png'
import Tasks from '../Components/Tasks';
import NewTask from '../Components/NewTask';

export default function Routes() {
    return (
        <div className={styles.main}>
            <div className = {styles.background}>
                <img className={styles.logo} src={logo} />
            </div>
            <NewTask />
        </div>
    )
}