import { Tabs } from "../../Tabs/Tabs"
import { tours } from "../../../constants/fixtures"
import styles from './styles.module.css'
import { useEffect, useState } from "react"
import { Tour } from "../../Tour/Tour"
import { useDispatch, useSelector } from "react-redux"
import { loadTours } from "../../../store/tour/actions"
import { selectIsTourLoading } from "../../../store/tour/selectors"
import { Outlet } from "react-router-dom"
import { Button } from "../../Button/Button"


export const TourPage = () => {

    const isLoading = useSelector(selectIsTourLoading)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadTours())
    }, [])

    if (isLoading) {
        return <div className="text_white">Loading...</div>
    }
    return (
        <div className={styles.root}>
            <Tabs 
            className={styles.tabs} 
            />
            <Outlet />
           
        </div>
    )
}