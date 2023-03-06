import classNames from "classnames"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import {  selectTourById } from "../../store/tour/selectors"
import styles from './styles.module.css'

export const Tab = ({tourId, className}) => {
    const tour = useSelector(state => selectTourById(state, {tourId}))
    return (
        <NavLink to = {tourId} className={({isActive}) => classNames(className,"text", {
            [styles.active]: isActive
        })}>
             {tour.name}
        </NavLink>

    )
}