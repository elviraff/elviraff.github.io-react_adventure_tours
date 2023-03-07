import { Button } from "../Button/Button"
import { useCount } from "../../hooks/useCount"
import styles from './styles.module.css'
import { useSelector, useDispatch } from "react-redux"
import { Actions } from "../../store"
import classnames from 'classnames'


export const ServiceOption=({option, className})=> {
    const {count, decrement, increment} = useCount(1)
    return (
        <div className={styles.mainInfo}>
            <div className={className}>
                {option}
            </div>
            <div className={styles.btn_block}>
                <Button className={styles.btn} onClick = {decrement}>-</Button>
                <div className={styles.count}>{count}</div>
                <Button className={styles.btn} onClick = {increment}>+</Button> 
            </div>
        </div>
        
    )
}