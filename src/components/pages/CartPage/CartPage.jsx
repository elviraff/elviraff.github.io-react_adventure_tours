import { useSelector } from "react-redux"
import { selectCartServiceIds  } from "../../../store/cart/selectors"
import { Service } from "../../Service/Service"
import classnames from 'classnames'
import styles from "./styles.module.css"
import { Button } from "../../Button/Button"


export const CartPage = () => {
    const servicesIds = useSelector(selectCartServiceIds)
    if( !servicesIds?.length) {
        return <div className={classnames("text", styles.text)}>Empty</div>
    }
    return (
        <div className={styles.root}>
            <div className={classnames("text", styles.header_big)}>Cart</div>
            {servicesIds.map ((id)=>
                <Service key = {id} serviceId = {id} className={styles.services}/>
            )}
        </div>
    )
}