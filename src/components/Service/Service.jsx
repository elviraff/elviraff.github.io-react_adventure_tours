import { useState } from "react"
import { Button } from "../Button/Button"
import { ServiceOption } from "../ServiceOption/ServiceOption"
import styles from './styles.module.css'
import { useCount } from "../../hooks/useCount"
import { useContext } from "react"
import { ThemeContext } from "../ThemeContextProvider/ThemeContexProvider"
import { useSelector, useDispatch } from "react-redux"
// import { useSelector, useDispatch } from "../CustomStore"
// import { CartActions } from "../../store"
import { addService, removeService } from "../../store/cart/actions"
import { selectServiceCountById } from "../../store/cart/selectors"
import { selectServiceById } from "../../store/services/selectors"
// import { addDish, addService, removeDish, removeService } from "../../store/cart/actions"
import classnames from 'classnames'


export const Service = ({serviceId, className}) => {
    // const {count, decrement, increment} = useCount(1)

    const service = useSelector(state => selectServiceById(state, {serviceId}))

    const count = useSelector(state => selectServiceCountById(state, {serviceId: service.id}));
    const dispatch = useDispatch();
    // const decrement = () => dispatch (removeService(service.id))
    // const increment = () => dispatch (addService(service.id))
    const decrement = () => dispatch (removeService(service.id))
    const increment = () => dispatch (addService(service.id))

    if(!service) {
        return null
    }

    let optionStyle = ""
    if (count > 0) {
        optionStyle = "service_option"
    }
    else optionStyle = "service_option_hidden"

    return (
        <div className={classnames(styles.root, className)}>
            <div className={styles.layer}></div>
            <div className={styles.mainInfo}>
                <div className={styles.header}> 
                    {service.name}
                </div>
                <div className={styles.btn_block}>
                    <Button className={styles.btn} onClick={decrement}>-</Button>
                    <div className={styles.count}>{count}</div>
                    <Button className={styles.btn} onClick={increment}>+</Button>
                </div>
            </div>
            {(count>0) && service.adventures.map((option, index) => (
                        <ServiceOption className={styles.service_option} key = {index} option = {option}/>
                    ))}
        </div>
    )
}


// lassName={({isActive}) => classNames(className,"text", {
//     [styles.active]: isActive
// })}