import { useSelector } from "react-redux"
import { selectTourServicesIdsById } from "../../store/tour/selectors"
import { Service } from "../Service/Service"
import styles from './styles.module.css'
import classnames from 'classnames'
import { useParams } from "react-router"


export const Services =({className})=> {
    const { tourId } = useParams();
    const servicesIds = useSelector(state => selectTourServicesIdsById(state, {tourId}))
    
    return (
        <div className={classnames (styles.root, className)}>
            <div className={styles.text_header}>Services</div>
            {servicesIds.map(item => (
                <Service key = {item} serviceId = {item} className={styles.services}/>
            ))}
        </div>
    )

}