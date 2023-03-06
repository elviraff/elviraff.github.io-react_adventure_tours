import { Button } from "../Button/Button"
import { useCount } from "../../hooks/useCount"
import styles from './styles.module.css'
import { useSelector, useDispatch } from "react-redux"
import { Actions } from "../../store"
import classnames from 'classnames'


export const ServiceOption=({option, className})=> {
    const {count, decrement, increment} = useCount(1)
    return (
        <div className={classnames(styles.root)}>
            <p className={className}>
                {option}
                <Button onClick = {decrement}>-</Button>
                    {count}
                <Button onClick = {increment}>+</Button> 
            </p>
        </div>
        
    )
}