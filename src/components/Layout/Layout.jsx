import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import styles from './styles.module.css'

export const Layout = ({children}) =>{

    return (
        <div className={styles.root}>
            <div className={styles.default}></div>
            <Header className = {styles.header} />
            <div className={styles.content}>
                {children}
            </div>
            <Footer  /> 
        </div>
    )
}