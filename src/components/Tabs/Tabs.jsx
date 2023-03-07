import classNames from "classnames"
import { useState } from "react"
import { useSelector } from "react-redux"

import { selectTourIds, selectTourIdsFilteredByName } from "../../store/tour/selectors"
import { Button } from "../Button/Button"
import { Tab } from "../Tab/Tab"
import styles from './styles.module.css'


export const Tabs = ({className}) => {
    const [search, setSearch] = useState("")
    const tourIds = useSelector((state) => selectTourIdsFilteredByName(state, {searchValue: search}))
    return (
        <div className={classNames(styles.root, className)} >
            <input 
                value = {search}
                onChange={(event) => setSearch(event.target.value)} 
                placeholder="Search direction..." 
                className={styles.searchInput} />
            <div>
            {tourIds.map((tourId) => (
                <Tab 
                    key = {tourId} 
                    tourId = {tourId} 
                    className={styles.tab}
                />
            ))}
            </div>
        </div>
        )
}