import styles from './styles.module.css'
import classnames from 'classnames'
import { Button } from '../../Button/Button'
import { useNavigate } from 'react-router';

export const HomePage = () => {
    const navigate = useNavigate();
    return (<div className={styles.root} >
        <div className= {classnames("text", styles.header_big)} >Adventure. Travelling</div>
        <div className={classnames("text", styles.header_small)} >Holidays with a difference</div>
        <div className={styles.btn}>
            <Button className={styles.btn} onClick={() => navigate('/tours')}>Find adventure</Button>
        </div>
        </div>)
}