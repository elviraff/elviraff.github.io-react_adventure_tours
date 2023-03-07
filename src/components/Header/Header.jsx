import styles from './styles.module.css'
import classnames from 'classnames'
import { Button } from '../Button/Button'
import { useContext } from 'react'
import { ThemeContext } from "../ThemeContextProvider/ThemeContexProvider";
import { NavLink } from 'react-router-dom';
import { TourPage } from '../pages/TourPage/TourPage';

export const Header = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    let headerStyle = ''
    if (theme === 'dark') {headerStyle = styles.dark} else {headerStyle = styles.default}
    return (
        <div className={styles.root}>
            <div>
            <NavLink 
                to = {"/"} 
                className={({isActive}) => classnames(styles.link, "text_white", {
                    [styles.active]: isActive
                })}
            >Adventure tours</NavLink>
            </div>
            <div className={styles.links}>
            <NavLink 
                to={"/tours"} 
                className={({isActive}) => classnames(styles.link, "text_white", {
                    [styles.active]: isActive
                })}
            >Tours</NavLink>
            
            <NavLink 
                to={"/cart"} 
                className={({isActive}) => classnames(styles.link, "text_white", {
                    [styles.active]: isActive
                })}
            >Cart</NavLink>
            </div>
        </div>
    )
}

// className={({isActive}) => classNames(className,"text", {
//     [styles.active]: isActive
// })}